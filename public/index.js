/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Classes/FlatJsonReader.js":
/*!***************************************!*\
  !*** ./src/Classes/FlatJsonReader.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_AnswerSelectionComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/AnswerSelectionComponent */ "./src/Components/AnswerSelectionComponent.js");
/* harmony import */ var _Components_EsgAnswerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/EsgAnswerComponent */ "./src/Components/EsgAnswerComponent.js");
/* harmony import */ var _Components_EsgQuestionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/EsgQuestionComponent */ "./src/Components/EsgQuestionComponent.js");
/* harmony import */ var _JsonReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JsonReader */ "./src/Classes/JsonReader.js");





class FlatJsonReader extends _JsonReader__WEBPACK_IMPORTED_MODULE_3__["default"] {
  title = 'Flat Json Structure';

  displayItems() {
    this.displayItem(this.json, 'initial');
  }

  /**
   * Displays a single item
   * @param {EsgItem[]} json
   * @param {string} itemId
   * @returns {string}
   */
  displayItem(json, itemId) {
    if (json[itemId].item.type !== 'answer' && json[itemId].item.type !== 'answer_numbers') {
      this._addContents(
        (0,_Components_EsgQuestionComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(
          json[itemId],
          this.renderEsgItemAnswers(json[itemId]),
          this.renderEsgItemAnswersDebug(json[itemId])
        )
      );
    }

    if (json[itemId].answers) {
      json[itemId].answers.map((answer) => this.displayItem(json, answer));
    }
  }

  /**
   * Renders all answers for a given EsgItem
   * @param {EsgItem} esgItem
   * @returns {string}
   */
  renderEsgItemAnswers(esgItem) {
    if (esgItem.answers) {
      return esgItem.answers
        .map((answerId) => (0,_Components_AnswerSelectionComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(this.json[answerId], esgItem))
        .join('');
    }
    return 'keine Antworten vorhanden';
  }

  /**
   *
   * Renders all answer debug information for a given EsgItem
   * @param {EsgItem} esgItem
   * @returns {string}
   */
  renderEsgItemAnswersDebug(esgItem) {
    if (esgItem.answers) {
      return esgItem.answers.map((answerId) => (0,_Components_EsgAnswerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(this.json[answerId])).join('');
    }
    return 'keine Antworten vorhanden';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatJsonReader);


/***/ }),

/***/ "./src/Classes/HierarchicalJsonReader.js":
/*!***********************************************!*\
  !*** ./src/Classes/HierarchicalJsonReader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_AnswerSelectionComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/AnswerSelectionComponent */ "./src/Components/AnswerSelectionComponent.js");
/* harmony import */ var _Components_EsgAnswerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/EsgAnswerComponent */ "./src/Components/EsgAnswerComponent.js");
/* harmony import */ var _Components_EsgQuestionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/EsgQuestionComponent */ "./src/Components/EsgQuestionComponent.js");
/* harmony import */ var _JsonReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JsonReader */ "./src/Classes/JsonReader.js");





class HierarchicalJsonReader extends _JsonReader__WEBPACK_IMPORTED_MODULE_3__["default"] {
  title = 'Hierarchical Json Structure';

  displayItems() {
    this.displayItem(this.json[0]);
  }

  displayItem(esgItem) {
    this._addContents(
      (0,_Components_EsgQuestionComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(
        esgItem,
        this.renderEsgItemAnswers(esgItem),
        this.renderEsgItemAnswersDebug(esgItem)
      )
    );

    if (esgItem.children) {
      esgItem.children.map((answer) => this.displayItem(answer)).join('');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  renderEsgItemAnswers(esgItem) {
    if (esgItem.children.length) {
      return esgItem.children
        .map((answerItem) => (0,_Components_AnswerSelectionComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(answerItem, esgItem))
        .join('');
    }
    return 'keine Antworten vorhanden';
  }

  // eslint-disable-next-line class-methods-use-this
  renderEsgItemAnswersDebug(esgItem) {
    if (esgItem.children.length) {
      return esgItem.children.map((answerItem) => (0,_Components_EsgAnswerComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(answerItem)).join('');
    }
    return 'keine Antworten vorhanden';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HierarchicalJsonReader);


/***/ }),

/***/ "./src/Classes/JsonReader.js":
/*!***********************************!*\
  !*** ./src/Classes/JsonReader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ErrorDisplayComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/ErrorDisplayComponent */ "./src/Components/ErrorDisplayComponent.js");
/* harmony import */ var _Components_LoadingScreenComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/LoadingScreenComponent */ "./src/Components/LoadingScreenComponent.js");
/* harmony import */ var _Components_ToggleButtonsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ToggleButtonsComponent */ "./src/Components/ToggleButtonsComponent.js");




/* eslint no-param-reassign: ["error", {
  "props": true,
  "ignorePropertyModificationsFor": ["button"]
}] */

class JsonReader {
  title = 'JSON Structure Abstract';

  constructor(link) {
    /**
     * @type {EsgItem[]|null}
     */
    this.json = null;
    this.link = link;
    this.dom_contents = document.getElementById('contents');
    this.dom_output = document.getElementById('output');
    this.dom_title = document.getElementById('title');
    this.dom_jsonoutput = document.getElementById('json');
  }

  /**
   * Fetch json data
   * @returns {Promise<any>}
   */
  async _fetchJson() {
    try {
      const response = await fetch(this.link);
      this.json = await response.json();
      return this.json;
    } catch (error) {
      throw Error(
        `Could not load JSON data from ${this.link}. <br />Error response: ${error.message}`
      );
    }
  }

  /**
   * Displays the json data
   * @returns {Promise<void>}
   */
  async show() {
    this._renderLoadingScreen();

    try {
      this._fetchJson()
        .then((json) => {
          this._render(_Components_ToggleButtonsComponent__WEBPACK_IMPORTED_MODULE_2__["default"], json);
          this.displayItems();
          document.querySelector('#initial-item').classList.remove('hidden');
        })
        .catch((e) => {
          this._renderError('Fetch Error', e.message);
        });
    } catch (e) {
      this._renderError('Undefined error', e.message);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  displayItems() {
    throw new Error('You have to implement the method displayItems!');
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderEsgItemAnswers(esgItem) {
    throw new Error('You have to implement the method renderEsgItemAnswers!');
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  renderEsgItemAnswersDebug(esgItem) {
    throw new Error('You have to implement the method renderEsgItemAnswers!');
  }

  /**
   * Renders the given content
   * @param {string} html HTML output
   * @param {object} json json original contents
   */
  _render(html, json) {
    this.dom_output.classList.remove('invisible');
    this.dom_title.textContent = this.title;
    this.dom_contents.innerHTML = html;
    this.dom_jsonoutput.innerHTML = JSON.stringify(json, null, 2);
  }

  /**
   * Append some html-content to the existing content
   * @param {string} html
   */
  _addContents(html) {
    this.dom_contents.innerHTML += html;
  }

  /**
   * Renders a loading screen
   */
  _renderLoadingScreen() {
    this._render(_Components_LoadingScreenComponent__WEBPACK_IMPORTED_MODULE_1__["default"], `waiting for JSON-Data from ${this.link}`);
  }

  /**
   * Renders an error
   * @param {string} title title of the error
   * @param {string} message message describing the error
   */
  _renderError(title, message) {
    this._render((0,_Components_ErrorDisplayComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(title, message), this.json);
  }

  /**
   * Handles the click event of each answer-buttons toggle button
   * @param {HTMLButtonElement} button
   */
  esgButtonToggleButtonClick(button) {
    // if only one element is selectable, unselect the other answer elements
    if (button.dataset.gate === 'xor') {
      const activeAnswerButton = document.querySelector(
        `#${button.dataset.parent}-item .esg-answer-button.esg-answer-opened`
      );
      if (activeAnswerButton !== null) {
        this._toggleChildrenEsgItems(activeAnswerButton);
      }
    }

    this._toggleChildrenEsgItems(button);
  }

  /**
   * Expands or collapse one answer-button
   * @param {HTMLButtonElement} button
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _toggleChildrenEsgItems(button) {
    const answerId = button.dataset.answer;

    if (button.disabled) {
      document
        .querySelectorAll(`.esg-close-${answerId}`)
        .forEach((el) => el.classList.add('hidden'));
      button.classList.remove('esg-answer-opened');
      button.disabled = false;
      button.dataset.children
        .split(',')
        .forEach((id) => document.getElementById(`${id}-item`)?.classList.add('hidden'));
    } else {
      button.classList.add('esg-answer-opened');
      button.disabled = true;
      button.dataset.children
        .split(',')
        .forEach((id) => document.getElementById(`${id}-item`)?.classList.remove('hidden'));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  closeAllEsgItems() {
    document
      .querySelectorAll('.esg-item:not(#initial-item)')
      .forEach((esgItem) => esgItem.classList.add('hidden'));
    document.querySelectorAll('.esg-answer-button').forEach((button) => {
      // eslint-disable-next-line no-param-reassign
      button.disabled = false;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showAllEsgItems() {
    document.querySelectorAll('.esg-item').forEach((esgItem) => esgItem.classList.remove('hidden'));
    document.querySelectorAll('.esg-answer-button').forEach((button) => {
      button.disabled = false;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  toggleStructureInfo() {
    document.body.classList.toggle('esg-debug-activated');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JsonReader);


/***/ }),

/***/ "./src/Components/AnswerButtonComponent.js":
/*!*************************************************!*\
  !*** ./src/Components/AnswerButtonComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates an AnswerButtonComponent
 * @param {EsgItem} answerEsgItem
 * @param {EsgItem} parentEsgItem
 * @returns {string}
 * @constructor
 */
function AnswerButtonComponent(answerEsgItem, parentEsgItem) {
  let childrenElements = '';
  if (answerEsgItem.answers) {
    childrenElements = answerEsgItem.answers?.join(',');
  }

  return `
        <button 
            data-children='${childrenElements}'
            data-parent='${parentEsgItem.item.id}'
            data-type='${parentEsgItem.item.type}'
            data-answer='${answerEsgItem.item.id}' 
            data-gate='${parentEsgItem.item.gate}'
            onclick='window.esgReaderInstance.esgButtonToggleButtonClick(this)' 
            class='disabled:opacity-75 grow md:grow-0 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 esg-answer-button'
        >
            ${answerEsgItem.item.title}
        </button>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerButtonComponent);


/***/ }),

/***/ "./src/Components/AnswerRangeComponent.js":
/*!************************************************!*\
  !*** ./src/Components/AnswerRangeComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates an AnswerButtonComponent
 * @param {EsgItem} answerEsgItem
 * @returns {string}
 * @constructor
 */
function AnswerRangeComponent(answerEsgItem) {
  return `
         <div class="grow">
              <p class="mt-1 text-sm text-gray-500 py-2">${answerEsgItem.item.title}</p>
              <div class="flex">
                <div class='flex-none px-2'>
                    ${answerEsgItem.item.range_min}&nbsp;${answerEsgItem.item.unit}
                </div>
                <div class="grow px-2">
                    <input type="range" class="disabled:opacity-75 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                                            w-full h-8 appearance-none rounded-full cursor-pointer outline-none focus:shadow-outline" />
                </div>
                <div class='flex-none px-2'>
                    ${answerEsgItem.item.range_max}&nbsp;${answerEsgItem.item.unit}
                </div>
              </div>
         </div>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerRangeComponent);


/***/ }),

/***/ "./src/Components/AnswerSelectionComponent.js":
/*!****************************************************!*\
  !*** ./src/Components/AnswerSelectionComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnswerButtonComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnswerButtonComponent */ "./src/Components/AnswerButtonComponent.js");
/* harmony import */ var _AnswerRangeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerRangeComponent */ "./src/Components/AnswerRangeComponent.js");



/**
 * Creates an AnswerButtonComponent
 * @param {EsgItem} answerEsgItem
 * @param {EsgItem} parentEsgItem
 * @returns {string}
 * @constructor
 */
function AnswerSelectionComponent(answerEsgItem, parentEsgItem) {
  if (answerEsgItem.item.type === 'answer_numbers') {
    return (0,_AnswerRangeComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(answerEsgItem);
  }

  return (0,_AnswerButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"])(answerEsgItem, parentEsgItem);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerSelectionComponent);


/***/ }),

/***/ "./src/Components/ButtonComponent.js":
/*!*******************************************!*\
  !*** ./src/Components/ButtonComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ButtonComponent(text, onClick) {
  return `
    <button class='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          onclick='${onClick}'
       >${text}</button>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);


/***/ }),

/***/ "./src/Components/ErrorDisplayComponent.js":
/*!*************************************************!*\
  !*** ./src/Components/ErrorDisplayComponent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Renders an error
 * @param {string} title title of the error
 * @param {string} message message describing the error
 * @returns {string}
 * @constructor
 */
function ErrorDisplayComponent(title, message) {
  return `
      <main class="sm:flex">
        <p class="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">Error</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">${title}</h1>
            <p class="mt-1 text-base text-gray-500">${message}</p>
          </div>
        </div>
      </main>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorDisplayComponent);


/***/ }),

/***/ "./src/Components/EsgAnswerComponent.js":
/*!**********************************************!*\
  !*** ./src/Components/EsgAnswerComponent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Renders an esg answer component for the given answer esg-item
 * @param {EsgItem} esgItem
 * @returns {string}
 * @constructor
 */
function EsgAnswerComponent(esgItem) {
  return `
      <li class='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
          <div class='px-6 py-4 overflow-hidden bg-white shadow sm:rounded-lg my-4 esg-item' id='${
            esgItem.item.id
          }-item-details' data-type='${esgItem.item.type}'>
            <div class='px-4 py-5 sm:px-6'>
              <h3 class='text-lg font-medium leading-6 text-gray-900'>${esgItem.item.title}</h3>
              ${
                esgItem.item.hint
                  ? `
                  <p class='mt-1 max-w-2xl text-sm text-gray-500'>${esgItem.item.hint}</p>
              `
                  : ''
              }
            </div>
            <div class='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl class='sm:divide-y sm:divide-gray-200'>
  
                  ${Object.keys(esgItem.item)
                    .map(
                      (property) => `
                    <div class='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                      <dt class='text-sm font-medium text-gray-500'>item.${property}</dt>
                      <dd class='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>${esgItem.item[property]}</dd>
                    </div>
                  `
                    )
                    .join('')}
                <div class='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                  <dt class='text-sm font-medium text-gray-500'>parent</dt>
                  <dd class='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      ${
                        esgItem.parent
                          ? `
                          <a href='#${esgItem.parent}-item' class='font-medium text-indigo-600 hover:text-indigo-500'>${esgItem.parent}</a>
                      `
                          : 'null'
                      }
                  </dd>
                </div>
              </dl>
            </div>
          </div>
      </li>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EsgAnswerComponent);


/***/ }),

/***/ "./src/Components/EsgQuestionComponent.js":
/*!************************************************!*\
  !*** ./src/Components/EsgQuestionComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Returns all css classes for the given item
 * @param {EsgItem} esgItem
 * @returns {string}
 */
function getCloserCssClasses(esgItem) {
  const esgCloseClassPrefix = 'esg-close-';

  const parentEsgItem = document.getElementById(`${esgItem.parent}-item`);

  if (parentEsgItem === null) {
    return `${esgCloseClassPrefix}root`;
  }

  const esgClasses = [esgCloseClassPrefix + esgItem.parent];

  for (let i = 0; i < parentEsgItem.classList.length; i += 1) {
    if (parentEsgItem.classList[i].startsWith(esgCloseClassPrefix)) {
      esgClasses.push(parentEsgItem.classList[i]);
    }
  }
  return esgClasses.join(' ');
}

/**
 *
 * @param {EsgItem} esgItem
 * @param {string} answers
 * @param {string} answersDebug
 * @returns {string}
 * @constructor
 */
function EsgQuestionComponent(esgItem, answers, answersDebug) {
  return `
        <div class='px-6 py-4 border-b border-gray-200 hidden overflow-hidden bg-white shadow sm:rounded-lg my-4 esg-item ${getCloserCssClasses(
          esgItem
        )}' id='${esgItem.item.id}-item' data-type='${esgItem.item.type}'>
            <div class='px-4 py-5 sm:px-6'>
            <h3 class='text-lg font-medium leading-6 text-gray-900'>${esgItem.item.title}</h3>
            ${
              esgItem.item.hint
                ? `
                <p class='mt-1 text-sm text-gray-500'>${esgItem.item.hint}</p>
            `
                : ''
            }
            </div>
            <div class='border-t border-gray-200 px-4 py-5 mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                ${answers}
            </div>
            <div class='border-t border-gray-200 px-4 py-5 sm:p-0 esg-debug'>
                <dl class='sm:divide-y sm:divide-gray-200'>
                
                    ${Object.keys(esgItem.item)
                      .map(
                        (property) => `
                      <div class='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                        <dt class='text-sm font-medium text-gray-500'>item.${property}</dt>
                        <dd class='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>${esgItem.item[property]}</dd>
                      </div>
                    `
                      )
                      .join('')}
                  <div class='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                    <dt class='text-sm font-medium text-gray-500'>parent</dt>
                    <dd class='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                        ${
                          esgItem.parent
                            ? `
                            <a href='#${esgItem.parent}-item' class='font-medium text-indigo-600 hover:text-indigo-500'>${esgItem.parent}</a>
                        `
                            : 'null'
                        }
                    </dd>
                  </div>
                  <div class='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6'>
                    <dt class='text-sm font-medium text-gray-500'>answers</dt>
                    <dd class='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      <ul role='list' class='divide-y divide-gray-200 rounded-md border border-gray-200'>
                        ${answersDebug}
                      </ul>
                    </dd>
                  </div>
                </dl>
            </div>
        </div>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EsgQuestionComponent);


/***/ }),

/***/ "./src/Components/LoadingScreenComponent.js":
/*!**************************************************!*\
  !*** ./src/Components/LoadingScreenComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadingScreenComponent = `
    <div class='mx-auto p-4'>
        <button type='button' class='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed' disabled=''>
            <svg class='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4'></circle>
                <path class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>lade Inhalte...
        </button>
    </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingScreenComponent);


/***/ }),

/***/ "./src/Components/ToggleButtonsComponent.js":
/*!**************************************************!*\
  !*** ./src/Components/ToggleButtonsComponent.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonComponent */ "./src/Components/ButtonComponent.js");


const ToggleButtonsComponent = `
  <div class='flex items-center justify-between border-b-2 border-gray-100 py-6'>
    <div class='flex justify-start lg:w-0 lg:flex-1 space-x-4'>
      ${(0,_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('show all', 'window.esgReaderInstance.showAllEsgItems()')}
      ${(0,_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('hide all', 'window.esgReaderInstance.closeAllEsgItems()')}
    </div>
    <div class='justify-end md:flex md:flex-1 lg:w-0 space-x-4'>
      ${(0,_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('Structure info', 'window.esgReaderInstance.toggleStructureInfo()')}
    </div>
  </div>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButtonsComponent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_FlatJsonReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/FlatJsonReader */ "./src/Classes/FlatJsonReader.js");
/* harmony import */ var _Classes_HierarchicalJsonReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/HierarchicalJsonReader */ "./src/Classes/HierarchicalJsonReader.js");



/**
 * @type {JsonReader|null}
 */
window.esgReaderInstance = null;

document.querySelectorAll('a[data-test]').forEach(
  /**
   * @param {HTMLLinkElement} el
   */ (el) => {
    el.addEventListener('click', async (clickEvent) => {
      clickEvent.preventDefault();

      if (el.dataset.test === 'json-flat') {
        window.esgReaderInstance = new _Classes_FlatJsonReader__WEBPACK_IMPORTED_MODULE_0__["default"](el.href);
      } else if (el.dataset.test === 'json-hierarchical') {
        window.esgReaderInstance = new _Classes_HierarchicalJsonReader__WEBPACK_IMPORTED_MODULE_1__["default"](el.href);
      } else {
        return false;
      }

      return window.esgReaderInstance.show();
    });
  }
);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
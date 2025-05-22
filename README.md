# Playwright tests for AppMagic country selector

## Installation

```npm
npm install
```

## Run

run tests in headless mode

```npm
npm run test
```

run tests in UI mode

```npm
npm run test:ui
```

run tests in debug mode

```npm
npm run test:debug
```

run last failed tests

```npm
npm run test:last:failed
```

show `html` report

```npm
npm run report
```

## Description

Test assignment for QA
AppMagic - [link](https://docs.google.com/document/d/1C72yAI3RewvfKRQse1EywqET1VMrDmzOMiY_S2TKdqE/edit?tab=t.0)

### Limitations

1. Provided tests do not cover fully functionality, such as:
	- checking API layer (requests and responses for selecting specific country)
	- checking page content updated after selecting specific country
2. Tests are not set up for CI, in matter of time-consuming.
3. Project devices were taken from default Playwright config
4. Repo branching was not applied, due to time saving.

## Test Object

Country selector field and search functionalities.

## Types of Testing

Automated testing of UI behaviour of the Country selector component

## Test Framework

Playwright + JS

## Test cases

### 1 - Check geography selector is visible

| № | Steps                                               | Expected result                   |
|---|-----------------------------------------------------|-----------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps        | The corresponding page is opened  |
| 2 | Check the Geography selector is visible on the page | The Geography selector is visible |

---

### 2 - Check geography search inside selector

| №  | Steps                                                                            | Expected result                                                                             |
|----|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| 1  | Visit https://appmagic.rocks/top-charts/apps                                     | The corresponding page is opened                                                            |
| 2  | Click on Geography selector                                                      | The Geography selector modal window is opened                                               |
| 3  | Input any country name in Capitalcase (ex.: `Algeria`)                           | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 4  | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |
| 5  | Input any country name in lowercase (ex.: `algeria`)                             | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 6  | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |
| 7  | Input any country name in UPPERCASE (ex.: `ALGERIA`)                             | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 8  | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |
| 9  | Input any country name with whitespace in the start (ex.: `" Algeria"`)          | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 10 | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |
| 11 | Input any country name with whitespace in the end (ex.: `"Algeria "`)            | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 12 | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |
| 13 | Input any country name with whitespace in the start and end (ex.: `" Algeria "`) | The country list is filtered and only the corresponding country is visible (ex.: `Algeria`) |
| 14 | Clear the input field                                                            | The input field is cleared and all countries are showing in the list                        |

---

### 3 - Check clicking on country

| № | Steps                                            | Expected result                                                            |
|---|--------------------------------------------------|----------------------------------------------------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps     | The corresponding page is opened                                           |
| 2 | Click on Geography selector                      | The Geography selector modal window is opened                              |
| 3 | Click on any country under the "Countries" label | The modal window is closed, selected country is showing on Geography field |

---

### 4 - Check clear input button is cleaning the entered text in input

| № | Steps                                        | Expected result                                                          |
|---|----------------------------------------------|--------------------------------------------------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps | The corresponding page is opened                                         |
| 2 | Click on Geography selector                  | The Geography selector modal window is opened                            |
| 3 | Input any text (ex.: any country name)       | Text is shown in input field                                             |
| 4 | Click on clear button                        | The input field is cleared and country list is back to its default state |

---

### 5 - Check geography selector is showing "Nothing to display" label

> snapshot is taken after last step and visual assertion is performed

| № | Steps                                        | Expected result                                                |
|---|----------------------------------------------|----------------------------------------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps | The corresponding page is opened                               |
| 2 | Click on Geography selector                  | The Geography selector modal window is opened                  |
| 3 | Input out of list country (ex.: `Zimbabwe`)  | Country list is hidden and "Nothing to display" label is shown |

---

### 6 - Check invalid input data

| №  | Steps                                                             | Expected result                                                      |
|----|-------------------------------------------------------------------|----------------------------------------------------------------------|
| 1  | Visit https://appmagic.rocks/top-charts/apps                      | The corresponding page is opened                                     |
| 2  | Click on Geography selector                                       | The Geography selector modal window is opened                        |
| 3  | Input numbers (ex.: `123`)                                        | Country list is hidden and "Nothing to display" label is shown       |
| 4  | Clear the input field                                             | The input field is cleared and all countries are showing in the list |
| 5  | Input big numbers (ex.: `1234765738904567859134857198375`)        | Country list is hidden and "Nothing to display" label is shown       |
| 6  | Clear the input field                                             | The input field is cleared and all countries are showing in the list |
| 7  | Input special characters (ex.: `"!@#$%^&*()<>?:" }{[]~\§±/)`      | Country list is hidden and "Nothing to display" label is shown       |
| 8  | Clear the input field                                             | The input field is cleared and all countries are showing in the list |
| 9  | Input space `" "`                                                 | Country list is not changed and clear button is shown                |
| 10 | Clear the input field                                             | The input field is cleared and all countries are showing in the list |
| 11 | Input Cyrillic symbols (ex.: `Россия`)                            | Country list is hidden and "Nothing to display" label is shown       |
| 12 | Clear the input field                                             | The input field is cleared and all countries are showing in the list |
| 13 | Input JS script (ex.: `<script>alert("I hacked this!")</script>`) | Country list is hidden and "Nothing to display" label is shown       |
| 14 | Clear the input field                                             | The input field is cleared and all countries are showing in the list |

---

### 7 - Check closing the selector

| № | Steps                                        | Expected result                               |
|---|----------------------------------------------|-----------------------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps | The corresponding page is opened              |
| 2 | Click on Geography selector                  | The Geography selector modal window is opened |
| 3 | Click outside the selector                   | The selector is closed                        |
| 4 | Click on Geography selector                  | The Geography selector modal window is opened |
| 5 | Press `Esc` button                           | The selector is closed                        |
| 6 | Click on Geography selector                  | The Geography selector modal window is opened |
| 7 | Press `Enter` button                         | The selector is closed                        |

---

### 8 - Check max length of input text

| № | Steps                                                                                                   | Expected result                                                      |
|---|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| 1 | Visit https://appmagic.rocks/top-charts/apps                                                            | The corresponding page is opened                                     |
| 2 | Click on Geography selector                                                                             | The Geography selector modal window is opened                        |
| 3 | Input 254 chars (ex.: `"AppMagic is the best analysis tool for mobile apps!".repeat(5) - last symbol`)  | Input text length is 254                                             |
| 4 | Clear the input field                                                                                   | The input field is cleared and all countries are showing in the list |
| 5 | Input 255 chars (ex.: `"AppMagic is the best analysis tool for mobile apps!".repeat(5)`)                | Input text length is 255                                             |
| 6 | Clear the input field                                                                                   | The input field is cleared and all countries are showing in the list |
| 7 | Input 256 chars (ex.: `"AppMagic is the best analysis tool for mobile apps!".repeat(5) + extra symbol`) | Input text length is 255                                             |



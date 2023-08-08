# Futil - Open Source Utility Functions (npm package)

![Futil Logo](https://example.com/futil-logo.png)

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)
8. [Acknowledgments](#acknowledgments)

## 1. Introduction

Welcome to Futil, an open-source npm package that provides a collection of utility functions to simplify your development process. Futil aims to be a versatile and efficient toolkit for JavaScript and TypeScript projects. It is designed to save you time and effort by offering commonly used utility functions, empowering you to focus on building great software.

## 2. Installation

To use Futil in your project, you need to have [Node.js](https://nodejs.org) installed. Then, simply run the following command in your terminal:

```bash
npm install @agnishc/futil

# or

yarn add @agnishc/futil
```

## 3. Usage

Using Futil in your project is straightforward. Once installed, you can import the functions you need like this:

```js
import { utils } from '@agnishc/futil';

const newWord = addRandomToWord('hello', 5)
// newWord = 'hello-5'
``` 

## 4. Features

Futil currently offers the following utility functions:

- Utils:
    - `addRandomToWord(word: string, length: number): string`

- Strings:
    - `capitalize(word: string): string;`
    - `pascalCase(word: string[]): string;`
    - `camelCase(word: string[]): string;`
    - `kebabCase(word: string[]): string;`
    - `snakeCase(word: string[]): string;`
    - `dotCase(word: string[]): string;`
    - `camelCaseToPascalCase(word: string): string;`
    - `pascalCaseToCamelCase(word: string): string;`
    - `caseIdentifier(word: string): enumCase;`


## 5. License
Futil is open-source software released under the MIT License. You are free to use, modify, and distribute this package in your projects, whether they are commercial or non-commercial.
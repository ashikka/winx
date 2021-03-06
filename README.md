[![csivit][csivitu-shield]][csivitu-url]
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/K9BwvSZ/Screenshot-from-2021-05-24-15-20-01.png" alt="Screenshot-from-2021-05-24-15-20-01" border="0"></a>
  </a>

  <h3 align="center">winx</h3>

  <p align="center">
    A CLI to generate CLIs
    <br />
    <a href="https://github.com/csivitu/Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/csivitu/Template">View Demo</a>
    ·
    <a href="https://github.com/csivitu/Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/csivitu/Template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project
<p align="center">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/K7yK5Sk/Screenshot-from-2021-05-24-15-22-18.png" alt="Screenshot-from-2021-05-24-15-22-18" border="0"></a>
<a href="https://ibb.co/y00ND6P"><img src="https://i.ibb.co/VVVLdg9/Screenshot-from-2021-05-24-15-24-11.png" alt="Screenshot-from-2021-05-24-15-24-11" border="0"></a>
</p>

**winx** is a development tool created to speed up your CLI development,so that you don't need to setup up your CLI project. It comes with well-defined directories and files, with all the packages needed installed, and pre-made config files to, so that you don't need to go through the painstaking process of setting up everything. 


### Built With

* [yargs](https://www.npmjs.com/package/yargs)
* [fs-extra](https://www.npmjs.com/package/fs-extra)
* [boxen](https://www.npmjs.com/package/boxen)
* [chalk](https://www.npmjs.com/package/chalk)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

Either through cloning with git or by using npm (the recommended way):

1. Install NPM packages
```sh
npm install -g winx
```
And winx will be installed globally to your system path.

<!-- USAGE EXAMPLES -->
## Usage

To check if installation was successful, use the command: 

```
winx --version
```
This will display the latest version. 

After installation, run the command below in your terminal:

```
winx --help 
```
The help menu with all the options will be listed. 

To create your own cli, use the command: 

```
winx <you-cli> <path>
```
`<your-cli>` argument takes the CLI's name  and `<path>` take the preferred path you want the CLI directory to be generated at on your local system. If no path is specified then the CLI will be generated in your current directory. 

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/csivitu/Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[csivitu-shield]: https://img.shields.io/badge/csivitu-csivitu-blue
[csivitu-url]: https://csivit.com
[issues-shield]: https://img.shields.io/github/issues/csivitu/Template.svg?style=flat-square
[issues-url]: https://github.com/csivitu/Template/issues

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ashikka"><img src="https://avatars.githubusercontent.com/u/58368421?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ashikka Gupta</b></sub></a><br /><a href="https://github.com/ashikka/winx/commits?author=ashikka" title="Documentation">📖</a> <a href="https://github.com/ashikka/winx/commits?author=ashikka" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
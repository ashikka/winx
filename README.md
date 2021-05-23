[![csivit][csivitu-shield]][csivitu-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/csivitu/Template">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/f2cwGRh/Screenshot-from-2021-05-22-23-30-10.png" alt="Screenshot-from-2021-05-22-23-30-10" border="0"></a>
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
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LQhJPtH/Screenshot-from-2021-05-22-23-23-29.png" alt="Screenshot-from-2021-05-22-23-23-29" border="0"></a>
<a href="https://ibb.co/Trsnk9m"><img src="https://i.ibb.co/8XHR016/Screenshot-from-2021-05-22-23-28-51.png" alt="Screenshot-from-2021-05-22-23-28-51" border="0"></a>
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
And gencli will be installed globally to your system path.

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

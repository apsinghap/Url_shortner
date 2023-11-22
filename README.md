# Url_shortner
# Node.js URL Shortener

A simple URL shortener service built with Node.js using Express and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a basic implementation of a URL shortener service using Node.js. It utilizes Express as the web framework, MongoDB for data storage, and nanoid for generating short IDs.

## Features

- Shorten long URLs to compact, easy-to-share versions.
- Redirect users to the original URLs when accessing the shortened versions.
- Track visit history for each shortened URL in MongoDB.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-url-shortener.git

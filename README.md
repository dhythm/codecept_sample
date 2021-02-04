# Installation
```
❯ npx codeceptjs init

? Where are your tests located? ./*_test.js
? What helpers do you want to use? Puppeteer
? Where should logs, screenshots, and reports to be stored? ./output
? Do you want localization for tests? (See https://codecept.io/translation/) English (no localization)
? [Puppeteer] Base url of site to be tested http://localhost
? [Puppeteer] Show browser window Yes
? [Puppeteer] Browser viewport size 1200x900
```

# Issue
## Different argument between local and docker
The test on local can run with
```
Scenario("something", ({ I }) => {
```
(See sample_test.js)
However, The test on docker can run with
```
Scenario("something", (I) => {
```
(See sample_docker_test.js)
Otherwise, both tests will be failed.

## Not working for Japanese if using the default Dockerfile
**Caveat: this process is not working.**
```
git clone https://github.com/codeceptjs/CodeceptJS.git
```

Add the following code into the Dockerfile,
```
# Install for Japanese font
RUN apt-get update
RUN apt-get install -y fontconfig fonts-noto-cjk && fc-cache -fv
```

Build a container image.
```
docker build --no-cache . -t codeceptjs
```

Then, you can run the following script,
```
npm run test:ci
```
const settings = {
  "name": "here",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org", // change this later when wordpress connected
      "title": "CEMCOD"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Our Work",
              "/our-work"
            ],
            [
              "News & Updates",
              "/news"
            ],
            [
              "Success Stories",
              "/stories"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

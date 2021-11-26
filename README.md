<div align="center">

# alexa-portfolio 

</div>
A high performance and mobile first hugo template for personal portfolio.

### Credit
HTML design using a template from [Bedimcode](https://www.youtube.com/watch?v=27JtRAI3QO8&t=1512s) with some modifications and convert to hugo by me, if using this template please give credit

### Demo
- [Live demo](https://hugo-alexa-portfolio.netlify.app/)
## Requirements
- Hugo Version 0.68.3 or higher
## How to use this template
- [Hugo theme format](#Hugo-theme-format)
- [Local Development](#Local-Development)
- [Direct deployment using netlify](#Direct-deployment-using-netlify)
- [Direct deployment using Github Pages and action](#Direct-deployment-using-Github-Pages-and-action)
### Hugo theme format
- Install Hugo and create a site using `hugo new site my-site`
- Clone this repo inside your themes folder and create config.yaml  inside root folder and use one of these [config](https://github.com/Bonzdev/alexa-portfolio/blob/main/website/config.toml) as base template.
```
cd themes
git clone https://github.com/Bonzdev/alexa-portfolio.git
```
- You should have the mentioned (_inside the config file_) images in static folder to use them.
### Local Development
- Install hugo and just clone this repo
```
git clone https://github.com/Bonzdev/alexa-portfolio.git
cd alexa-portfolio
```
- Now create config.toml file in your root folder and use one of these [config](https://github.com/Bonzdev/alexa-portfolio/blob/main/website/config.toml) as base template.
- Run your site using `hugo serve` commend
### Direct deployment using netlify
- Fork this repo or create new repo using `use this template` button and connect repo to netlify.
- You can customize the config file, content and everything inside website folder. Netlify will automatically deploy your changes every time you modify the repo.
**[What is netlify?](https://www.netlify.com/about/)** An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps
### Direct deployment using Github Pages and action
- Fork this repo or create new repo using `use this template` button. Github action will generate all files and push to demo branch. Now, you have to connect your github pages to that `demo` branch. _No need to create demo branch. Github action will take care of it_
- You can customize the config file, content and everything inside website folder. Github action will automatically deploy your changes to demo branch every time you modify the repo.
## Deployment
Run `hugo`. It will generate a folder called public. You can use the files inside public folder for deployment. You should delete the public folder for each time when you are using `hugo` commend.
## Issues
If you have a question, please [open an issue](https://github.com/Bonzdev/alexa-portfolio/issues) for help and to help those who come after you. The more information you can provide, the better!
## Contributing
Contributions, issues, and feature requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
## License
Licensed under [MIT](LICENSE)
## 🤝 Support

Give a ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/secretsrecipe" target="_blank" rel="noopener"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" width="145" alt="Buy Me A Coffee"></a>

### Purpose: 
- Build tool to generate location dataset for image map.

### Solution:
- Electron + React

### Interface
![interface image](./images/interface.png)

### How to Deploy:
1. open command window and cd to folder "Image-Dataset-Generator/app"
2. run `npm install`
3. run `npm run build`
4. cd to folder "Image-Dataset-Generator", run `npm start`

### How to Package an App
1. open command window and cd to folder "Image-Dataset-Generator"
2. run `npm run package-mac` or `package-win`. Please refer to [Using Electron-Packager To Package an Electron App](http://mylifeforthecode.com/using-electron-packager-to-package-an-electron-app/) if you meet any problem.

### How to Use:
1. Drag image to window
2. Click specific position on image to add location, one by one
3. You can also remove data row by click `delete` icon
4. Resize the window, marker position will be update
5. Save to .excel

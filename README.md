# wx-demo

```
1）git clone https://github.com/fengdanbailu/wx-demo.git
2）cd wx-demo  //进入目录
3) touch project.config.json //创建project.config.json文件，并拷贝如下内容；
4）appid替换成自己的 id
5）编译启动即可。
```

```
{
	"miniprogramRoot": "miniprogram/",
	"cloudfunctionRoot": "cloudfunctions/",
	"setting": {
		"urlCheck": true,
		"es6": true,
		"postcss": true,
		"preloadBackgroundData": false,
		"minified": true,
		"newFeature": true,
		"autoAudits": false,
		"coverView": true,
		"showShadowRootInWxmlPanel": true,
		"scopeDataCheck": false,
		"enhance": true,
		"useCompilerModule": false
	},
	"appid": "xxxxxxxx",
	"projectname": "wx-demo",
	"libVersion": "2.8.1",
	"simulatorType": "wechat",
	"simulatorPluginLibVersion": {},
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"plugin": {
			"current": -1,
			"list": []
		},
		"game": {
			"list": []
		},
		"miniprogram": {
			"current": 0,
			"list": [
				{
					"id": -1,
					"name": "db guide",
					"pathName": "pages/databaseGuide/databaseGuide"
				}
			]
		}
	}
}
```
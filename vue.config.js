const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true
})
module.exports = {
	css: {
		loaderOptions: {
			scss: {
				// 이 옵션에 변수를 모아둔 파일을 연결한다.
				additionalData: `
					@import "@/assets/scss/_variabled.scss";
				`,
			},
		},
	},
};
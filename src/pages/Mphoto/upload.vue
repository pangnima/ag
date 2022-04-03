<template>
	<div class="container">
		<h2 class="title">움짤</h2>
		<div class="upload">
			<dl>
				<dt>움짤 제목</dt>
				<dd><input type="text"></dd>
			</dl>
			<dl>
				<dt>움짤의 주인공은 누구인가요?(2명 이상이면 대표 BJ만 선택해주세요)</dt>
				<dd><input type="text"></dd>
			</dl>
			<dl>
				<dt>파일 첨부</dt>
				<dd><input type="text"><button type="button" class="btn-file"><span>파일찾기</span></button></dd>
			</dl>
			<div class="btn-box">
				<button type="button" class="btn-upload"><span>올리기</span></button>
			</div>
		</div>
	</div>
</template>

<script>
	// import IconSearch from '@/assets/icon/ico_search.vue';
	// import ContentsInfo from '@/components/ContentInfo.vue';
	export default {
		name: 'MovePhoto',
		components:{
			// IconSearch,
			// ContentsInfo
		}
	}
</script>
<style lang="scss" scoped>
.container{padding-top:60px;}
.sub-menu{display:flex; padding:30px 0; align-items:center; justify-content:space-between;}
.title{font-size:30px;}
.tab{display:flex; align-items:center;
	a{padding:5px 30px; border:solid 1px #eee; border-radius:10px;
		&.router-link-exact-active{background:#ddeef6;}
		
		& + a{margin-left:10px;}
	}
}
.search-box{
	button{border:0; background: none;
		& + button{margin-left: 15px;}
		&.btn-hot svg{width: 25px;}
		&.btn-search svg{width: 25px;}
	}
}

	.upload{
		dl{
			margin:30px 0;
			dt{font-size: 18px;}
			dd{
				margin-top:10px;
				display: flex;
				input{width: 100%;
					border:solid 1px #ccc;
					padding:10px 20px;
					border-radius: 5px;
				}
			}
		}
		button[class^=btn-]{
			border:solid 1px #ccc;
			padding:5px 10px;
			border-radius: 5px;
			margin-left: 20px;
			width: 100px;
		}
		.btn-box{
			text-align: center;
			margin-top:50px;
			button{padding:10px 20px;}
		}
	}
</style>
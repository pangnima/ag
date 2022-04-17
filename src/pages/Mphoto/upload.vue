<template>
	<div class="container">
		<h2 class="title">움짤</h2>
		<div class="upload">
			<dl>
				<dt>움짤 제목</dt>
				<dd>
					<div>
						<input type="text">
					</div>
				</dd>
			</dl>
			<dl>
				<dt>움짤의 주인공은 누구인가요?(2명 이상이면 대표 BJ만 선택해주세요)</dt>
				<dd>
					<div>
						<input type="text" placeholder="BJ를 입력하세요">
					</div>
					<p>입력하신 BJ가 없어요</p>	
				</dd>
			</dl>
			<dl>
				<dt>파일 첨부</dt>
				<dd>
					<div>
						<input type="text"><button type="button" class="btn-file"><span>파일찾기</span></button>
					</div>
				</dd>
			</dl>
			<div class="btn-box">
				<button type="button" class="btn-upload"><span>올리기</span></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MovePhotoUpload',
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
				> div {
					display: flex;
				}
				input{
					width: 100%;
					flex:1;
					border:solid 1px #ccc;
					padding:10px 20px;
					border-radius: 5px;
				}
				p{color:#ff5555; margin-top:10px}
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
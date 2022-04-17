<template>
	<div class="container">
		<div class="board-write-container">
			<h2>메뉴 선택</h2>
			<ul class="cate-list">
				<li class="active">#전체</li>
				<li>#스타크래프트</li>
				<li>#롤</li>
				<li>#배그</li>
				<li>#방송</li>
				<li>#잡답</li>
			</ul>
			<div class="write-area">
				<input type="text" placeholder="제목을 입력해주세요">
				<p class="nick">감스트주보리우결단</p>
				<div class="thumb">
					<img src="@/assets/images/icon_thumb.png" alt="">
				</div>
				<div class="txt-edit">
					텍스트 에디터 영역
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import IconLike from "../../components/icon/IconLike.vue"
// import IconComment from "../../components/icon/IconComment.vue"
// import IconView from "../../components/icon/IconView.vue"
export default {
	name: "BoardWirte",
	components:{
		// IconLike,IconComment,IconView
	}
}
</script>

<style lang="scss" scoped>
.container{padding:30px 100px; border:solid 1px #e1e1e1; margin-top:40px; border-radius: 5px; box-sizing: border-box;}
.board-write-container{
	h2{font-size: 14px;}
	.cate-list{display: flex; align-items:center; font-size: 14px;
		margin-top:20px;
		li{border:solid 1px #e1e1e1; padding:5px 10px; border-radius: 10px; margin-right:10px; cursor: pointer;
			&.active{font-weight: bold;}
		}
	}
	.write-area{
		margin-top:20px;
		position: relative;
		input{border:0; display: block; font-size: 18px; height: 40px; width:100%;}
		.nick{font-size: 14px; margin-top:5px;}
		.thumb{position:absolute; top:30px; right:0;}
	}
}
.txt-edit{
	padding:20px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	margin:30px 0;
	border:solid 1px #333;
}
</style>

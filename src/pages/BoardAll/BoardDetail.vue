<template>
	<div class="container">
		<div class="board-viewer">
			<div class="view-info">
				<div>
					<h2 class="title">일하다 왔는데 빨리 가버리셨넴 ㅎㅎ</h2>
					<div><span class="nick">감스트주보리우결단</span> · <span class="time">14:28</span></div>
				</div>
				<div class="thum">
					<img src="@/assets/images/icon_nick.png" alt="">
				</div>
			</div>
			<div class="detail">
				<IconView></IconView>
				<IconComment></IconComment>
				<IconLike></IconLike>
			</div>
			<div class="board-txt">
				오늘은 어무니랑 벚꽃을 보러갔다왔습니다 ㅡㅜ<br>
				<br>
				알배긴게 나아지지않아서 엄마 손 잡고 에고고 거리면서 동네 길을 걷는데<br>
				<br>
				벚꽃이 이쁘긴 이쁘덥니다 ㅠ<br>
				<br>
				내일이면 비가 온다고해서 다 진다고 하니까 씁쓸..<br>
				<br>
				미세먼지 때문에 나갔다 오니까 다리도 쑤시고 그러네요<br>
				<br>
				오늘은 썸썸 편의점 편수희루트 ㅎㅎ... 교수님 모드로 갑니다<br>
				<br>
				방구석 트수들 돈 뽑아 먹을려고 제가 별짓을 다하네요 ㅎㅎㅎ 피곤하지만 쉽게 돈 벌려면 어쩔 수 없죠 ㅎㅎ<br>
				<br>
				니들이 또 과몰입하게 하려면 어떻게 해야 할지 너무 잘 아니까요 ㅎㅎ<br>
				<br>
				그럼 준비해서 옵니다 뿅
			</div>
			<div class="board-list">
				<router-link to="/">수정</router-link>
				<router-link to="/">삭제</router-link>
				<router-link to="/">목록</router-link>
			</div>
		</div>

		<div class="txt-edit">
			<div>텍스트에디터 라인</div>
		</div>
		<BoardComment></BoardComment>
	</div>
</template>

<script>
import IconLike from "../../components/icon/IconLike.vue"
import IconComment from "../../components/icon/IconComment.vue"
import IconView from "../../components/icon/IconView.vue"
import BoardComment from "../../components/BoardComment.vue"


export default {
	name: "BoardDetail",
	components:{
		IconLike,IconComment,IconView,
		BoardComment
	}
}
</script>

<style lang="scss" scoped>
.container{padding:30px 100px; border:solid 1px #e1e1e1; margin-top:40px; border-radius: 5px; box-sizing: border-box;}
.title{font-size:30px;}

.board-viewer{
	.view-info{display:flex; justify-content:space-between;
		.title{padding-bottom:10px;font-size:$tf;}
		.nick{font-size:$sf;}
		.time{font-size:$sf;}
		.thum{width:80px;
			img{width:100%;}
		}
	}
	.detail{
		background: rgba(227, 255, 223, 0.66);
		padding:10px 20px;
		font-size: 14px;
		display: flex;
		margin-top:20px;
		* {margin-right:10px;}
	}
	.board-txt{
		padding:20px 0;
		font-size: $mf;
	}
	.board-list{
		background: #eee;
		text-align: right;
		padding:8px 20px;
		a{background: #fff; border-radius: 10px; border:solid 1px #707070; padding:5px 20px; display: inline-block; margin-left: 5px;}
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

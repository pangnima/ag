<template>
	<div class="container">
		<h2 class="title">모아보기</h2>
		<div class="sub-menu">
			<div class="tab">
				<router-link to="/moa/ib/">인방갤</router-link>
				<router-link to="/moa/ag/" class="router-link-active router-link-exact-active">아게더</router-link>
			</div>
			<div class="search-box">
				<button type="button" class="btn-hot"><IconFire></IconFire></button>
				<button type="button" class="btn-search"><IconSearch></IconSearch></button>
			</div>
		</div>
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
				<span class="views"><img src="@/assets/images/icon/icon_view.png"> 999,999</span>
				<span class="comment"><img src="@/assets/images/icon/icon_comment.png"> 999,999</span>
				<span class="like"><img src="@/assets/images/icon/icon_like.png"> 999,999</span>
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

				<div class="outer-link">
					외부 콘텐츠입니다. 아래 링크를 누르면 해당 사이트로 이동합니다.
					<a href="#" target="_blank">해당 사이트로 이동</a>
				</div>
			</div>
			<div class="board-list">
				<router-link to="/">목록</router-link>
			</div>
		</div>
		<div class="board-comment">
			<div class="comment-header">
				<span class="total">댓글 999,999 개</span>
				<div class="tab">
					<router-link to="/" class="active">최신순</router-link>
					<router-link to="/">인기순</router-link>
				</div>
			</div>
			<ul class="comment-list">
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
				<li>
					<div class="comment-header">
						<div class="thumb">
							<img src="@/assets/images/icon_thumb.png" alt="">
						</div>
						<span class="tag">BEST</span>
						<button type="button" class="nick"><span>감스트주보리우결단</span></button>
						<div class="info">
							<span class="link">999,999</span>
							<span class="time">16:29</span>
							<button type="button"><span>신고</span></button>
							<button type="button" class="btn-more"><span>더보기</span></button>
						</div>
					</div>
					<div class="comment-body">
						<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
export default {
	name: "MoaAg"
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


.board-viewer{
	.view-info{display:flex; justify-content:space-between;
		.title{padding-bottom:10px;font-size:$h2;}
		.nick{font-size:$p;}
		.time{font-size:$p;}
		.thum{width:100px;}
	}
	.detail{
		background: rgba(227, 255, 223, 0.66);
		padding:10px 20px;
		font-size: 14px;
		display: flex;
		margin-top:20px;
		span{
			display: flex;
			align-items: center;
			margin-right:10px;
		}
		img{width:20px; margin-right: 4px;}
	}
	.board-txt{
		padding:20px 0;
		font-size: $pl;
	}
	.board-list{
		background: #eee;
		text-align: right;
		padding:8px 20px;
		a{background: #fff; border-radius: 10px; border:solid 1px #707070; padding:5px 30px; display: inline-block;}
	}
	.outer-link{
		border:solid 1px #eee;
		padding:10px 30px;
		font-size: $p;
		text-align: center;
		width: 730px;
		margin:50px auto;
		a{display: block; color:blue; margin-top:20px;}
	}
}
.comment-header{
	display: flex;
	justify-content: space-between;
	.total{
		display: flex;
		padding:20px;
		&::before{
			content: "";
			display: block;
			width: 28px;
			height: 25px;
			margin-right: 10px;
			background: url('@/assets/images/icon/icon_comment_25.png') 0 0 no-repeat;
		}
	}
	.tab{
		a{font-size: 14px; border:0; padding:0 10px;
			&.active{font-weight: bold;}
			& + a {margin-left:10px;}
		}
	}
}

.comment-list{
	margin-top:10px;
	li{margin-top:20px;}
	.comment-header{
		background: #eee;
		padding:10px 20px;
		border-radius: 10px 10px 0 0;
		display: flex;
		justify-content: left;
		align-items: center;
		.thumb{width:40px; border-radius: 50%;
			img{vertical-align: top; width:100%}
		}
		.tag{padding:2px 10px; color:#fff; background: #fb8488; border-radius: 30px;margin-left: 10px; font-size: 12px;}
		.nick{border:none;background: transparent; margin-left: 10px;}
		.info{
			margin-left: auto;
			font-size:$p;
			display: flex;
			align-items: center;
			> span{margin-left: 20px; display: inline-block;}
			button{border:0; margin-left: 20px;
				&.btn-more{
					font:0/0 a;
					width: 25px; height: 25px;
					background: url('@/assets/images/icon/ico_more.svg') 50% 50% no-repeat;
					background-size: 15px 15px;
				}
			}
		}
	}
	.comment-body{padding:20px; border:solid 1px #eee; border-radius:0 0 10px 10px;}
}
</style>

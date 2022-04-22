<template>
	<div class="container">
		<div class="main-banner">
			<div>
				<img src="@/assets/images/main/main_slide_01.png" alt="">
			</div>
		</div>

		<div class="board-box">
			<div class="board-item">
				<BoardTitle :title="'인기'"></BoardTitle>
				<div class="list">
					<ul>
						<li>
							<a href="#">
								<span class="title">⭐ 아프리카 NO.1 남캠JPG ⭐를 araboja</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">킴성태님의 구독자 100만 돌파를 추카드립니다...</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">게시글 제목은 1줄 말줄임표로 표 시해야 되요 알겠죠?</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">⭐ 아프리카 NO.1 남캠JPG ⭐를 araboja</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="board-item">
				<BoardTitle :title="'최신'"></BoardTitle>
				<div class="list">
					<ul>
						<li>
							<a href="#">
								<span class="title">⭐ 아프리카 NO.1 남캠JPG ⭐를 araboja</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">킴성태님의 구독자 100만 돌파를 추카드립니다...</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">게시글 제목은 1줄 말줄임표로 표 시해야 되요 알겠죠?</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span class="title">⭐ 아프리카 NO.1 남캠JPG ⭐를 araboja</span>
								<span class="writer">BJ 킴성태</span>
								<span class="couter">조회수 <em>9999</em></span>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="board-photo">
				<BoardTitle :title="'움직여라 움짤~ 움짤'"></BoardTitle>
				<div class="list">
					<ul>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_0.png" alt=""></router-link></li>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_1.png" alt=""></router-link></li>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_2.png" alt=""></router-link></li>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_3.png" alt=""></router-link></li>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_4.png" alt=""></router-link></li>
						<li><router-link to="/"><img src="@/assets/images/main/move_photo_5.png" alt=""></router-link></li>
						<!-- <li><router-link to="/"><img src="@/assets/images/main/move_photo_6.png" alt=""></router-link></li> -->
						<!-- <li><router-link to="/"><img src="@/assets/images/main/move_photo_7.png" alt=""></router-link></li> -->
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="container clip" >
		<BoardTitle :title="'보다 보면 보게되는 클립'"></BoardTitle>
		<div class="list">
			<Swiper
				:modules="modules"
				:slides-per-view="4.5"
				:space-between="10"
				navigation
			>
				<swiper-slide>
					<router-link to="/">
						<div class="thumb">
							<img src="@/assets/images/main/clip_thumb.png" alt="">
						</div>
						<div class="txt-box">
							<h3 class="title">나 하루만 자고 갈게</h3>
							<p>BJ 케이</p>
							<div>
								<p class="counter">조회수 999,999</p>
								<span class="time">18시간 전</span>
							</div>
						</div>
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/">
						<div class="thumb">
							<img src="@/assets/images/main/clip_thumb.png" alt="">
						</div>
						<div class="txt-box">
							<h3 class="title">나 하루만 자고 갈게</h3>
							<p>BJ 케이</p>
							<div>
								<p class="counter">조회수 999,999</p>
								<span class="time">18시간 전</span>
							</div>
						</div>
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/">
						<div class="thumb">
							<img src="@/assets/images/main/clip_thumb.png" alt="">
						</div>
						<div class="txt-box">
							<h3 class="title">나 하루만 자고 갈게</h3>
							<p>BJ 케이</p>
							<div>
								<p class="counter">조회수 999,999</p>
								<span class="time">18시간 전</span>
							</div>
						</div>
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/">
						<div class="thumb">
							<img src="@/assets/images/main/clip_thumb.png" alt="">
						</div>
						<div class="txt-box">
							<h3 class="title">나 하루만 자고 갈게</h3>
							<p>BJ 케이</p>
							<div>
								<p class="counter">조회수 999,999</p>
								<span class="time">18시간 전</span>
							</div>
						</div>
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/">
						<div class="thumb">
							<img src="@/assets/images/main/clip_thumb.png" alt="">
						</div>
						<div class="txt-box">
							<h3 class="title">나 하루만 자고 갈게</h3>
							<p>BJ 케이</p>
							<div>
								<p class="counter">조회수 999,999</p>
								<span class="time">18시간 전</span>
							</div>
						</div>
					</router-link>
				</swiper-slide>
			</Swiper>
		</div>
	</div>


	<div style="margin:60px 0; background:#000; text-align:center">
		<img src="@/assets/images/main/img_ad.png">
	</div>

	<div class="container">
		<div class="review">
			<board-title :title="'방송리뷰'"></board-title>
			<div>
				<div class="bs-type">
					<div class="bs-title">
						<div class="thumb">
							<img src="@/assets/images/main/bs_review.png" alt="" srcset="">
						</div>
						<div class="txt-box">
							<p class="title">제목: [쇙] 오늘 진결갑니다</p>
							<p class="date">방송일: 2021년 1월 1일</p>
							<p class="views">최고 시청자: 999,999명</p>
						</div>
					</div>
					<div class="review-list">
						<ul>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
						</ul>
					</div>
				</div>

				<div class="bs-type">
					<div class="bs-title">
						<div class="thumb">
							<img src="@/assets/images/main/bs_review.png" alt="" srcset="">
						</div>
						<div class="txt-box">
							<p class="title">제목: [쇙] 오늘 진결갑니다</p>
							<p class="date">방송일: 2021년 1월 1일</p>
							<p class="views">최고 시청자: 999,999명</p>
						</div>
					</div>
					<div class="review-list">
						<ul>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
							<li>
								<div><img src="@/assets/images/main/img_rating.png" alt=""></div>
								<p>맨날 똑같은 게스트 똑같은 레퍼토리..이제 지겹다 ㅅㅂ</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BoardTitle from '../components/BoardTitle.vue';
	import { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	export default {
		name : "MainPage",
		components: {
			BoardTitle,
			Swiper,
			SwiperSlide
		},
		data() {
			return{
				modules: [Navigation]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-banner{
		margin-top: 40px;
	}
	.board-box{
		padding-top:80px;
		.board-item{
			& + .board-item{ border-top:solid 1px #707070; margin-top:30px; padding-top:50px;}
			.list{
				padding-top:20px;
				a{
					display: flex;
					align-items: center;
					padding:5px 0;
					line-height: 28px;
					font-size:16px;
					.writer{color:#333; margin-left: 20px;
						border-left: solid 1px #000;;
						line-height: 1;
						padding-left: 20px;
					}
					.couter{margin-left: auto;}
				}
			}
		}
	}

	.board-photo {
		padding-top:50px;
		.list{
			padding-top:30px;
			ul{display: flex; flex-wrap: wrap;
				justify-content: space-between;
				li{
					border-radius: 20px;
					border:solid 1px #eee;
					box-sizing: border-box;
					width:16.5%;
					img{vertical-align: top; width: 100%;}
				}
			}
		} 
	}

	.container.clip{
		padding-top:80px;
		.list {
			padding-top:30px;
			.swiper{overflow: visible;}
			.swiper-slide {
				width:450px;
				border-radius: 15px 15px 0 0;
				overflow: hidden;
				img{vertical-align: top; width: 100%;}
				.txt-box{
					padding:15px 20px;
					border-radius: 0 0 15px 15px;
					border:solid 1px #e1e1e1;
					border-top:0;
					font-size: 16px;
					.title{font-size: 18px;}
					p{padding:5px 0;}
					div{display: flex;justify-content: space-between; font-size: 14px;}
				}
			}
			&::v-deep .swiper-button-prev{
				position:absolute; background:url('@/assets/images/icon_prev.png') 50% 50% no-repeat; 
				width:50px; height:50px;
				background-size: 34px 17px; top:-70px;
				cursor: pointer;
			}
			&::v-deep .swiper-button-next{
				position:absolute; background:url('@/assets/images/icon_prev.png') 50% 50% no-repeat; 
				width:50px; height:50px;
				background-size: 34px 17px; top:-70px;
				cursor: pointer;
			}
			&::v-deep .swiper-button-prev{right:100px;}
			&::v-deep .swiper-button-next{transform: rotate(180deg);right:0;}
		}
	}

	.bs-type{
		display: flex;
		padding-top:30px;
		.bs-title{margin-right: 20px;}
		.txt-box {padding:10px 0;
			font-size: 14px;
			.title{font-weight: bold; font-size: 16px; padding-bottom:10px;}
		}
		.review-list{
			ul{
				display: flex;
				flex-wrap: wrap;
				margin:-1% 0 0 -1%;
				li{border:solid 1px #e1e1e1; width: 32%; padding:20px; border-radius: 20px; margin:1% 0 0 1%; box-sizing: border-box;}
			}
		}
	}
</style>

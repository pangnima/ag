<template>
	<div class="container">
		<h2 class="title">움짤</h2>
		<div class="bnt-container">
			<button type="button" class="btn-modify"><span>수정</span></button>
			<button type="button" class="btn-del"><span>삭제</span></button>
			<button type="button" class="btn-upload"><span>올리기</span></button>
		</div>

		<div>
			<div class="mphoto-view">
				<!-- 왼쪽 메인 움짤 -->
				<div class="main-photo">
					<div class="thumb">
						<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
					</div>
					<div class="info-box">
						<h2 class="title">제목을 길게 보여주면서 길면 2줄까지 
보여주고 말줄임표..제목을 길게 보여주면서 길면 2줄까지 
보여주고 말줄임표..제목을 길게 보여주면서 길면 2줄까지 
보여주고 말줄임표..제목을 길게 보여주면서 길면 2줄까지 
보여주고 말줄임표..</h2>
						<div class="detail">
							<IconLike></IconLike>
							<IconComment></IconComment>
							<span class="time">18시간 전</span>
						</div>
					</div>
				</div>
				<!-- // 왼쪽 메인 움짤 -->

				<!-- 리스트 움짤 -->
				<div class="list-photo">
					<ul>
						<li>
							<div class="thumb">
								<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
							</div>
							<div class="info-box">
								<h2 class="title">감스트 복종햇!!!!!!! 감스트 복종햇!!!!!!! 감스트 복종햇!!!!!!! 감스트 복종햇!!!!!!! 감스트 복종햇!!!!!!! </h2>
								<div class="detail">
									<IconLike></IconLike>
									<IconComment></IconComment>
									<span class="time">18시간 전</span>
								</div>
							</div>
						</li>
						<li>
							<div class="thumb">
								<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
							</div>
							<div class="info-box">
								<h2 class="title">감스트 복종햇!!!!!!!</h2>
								<div class="detail">
									<IconLike></IconLike>
									<IconComment></IconComment>
									<span class="time">18시간 전</span>
								</div>
							</div>
						</li>
						<li>
							<div class="thumb">
								<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
							</div>
							<div class="info-box">
								<h2 class="title">감스트 복종햇!!!!!!!</h2>
								<div class="detail">
									<IconLike></IconLike>
									<IconComment></IconComment>
									<span class="time">18시간 전</span>
								</div>
							</div>
						</li>
						<li>
							<div class="thumb">
								<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
							</div>
							<div class="info-box">
								<h2 class="title">감스트 복종햇!!!!!!!</h2>
								<div class="detail">
									<IconLike></IconLike>
									<IconComment></IconComment>
									<span class="time">18시간 전</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- // 리스트 움짤 -->
			</div>

			<!-- 움짤 정보 -->
			<div class="m-detail">
				<h2>이 움짤에 주인공은?</h2>
				<div>

				</div>
				<div class="owner">
					<!-- <img src="@/assets/images/icon_thumb.png" alt=""> -->
					<span class="nick">주보리</span>
				</div>
				<div class="btn-container">
					<a href="#">정보</a>
					<a href="#">플레이스</a>
				</div>
			</div>
			<!-- // 움짤 정보 -->

			<!-- 댓글 영역 -->
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
								<!-- <img src="@/assets/images/icon_thumb.png" alt=""> -->
							</div>
							<span class="tag">BEST</span>
							<button type="button" class="nick"><span>감스트주보리우결단</span></button>
							<div class="commnet-info">
								<IconLike></IconLike>
								<span class="time dot">16:29</span>
								<button type="button" class="dot"><span>신고</span></button>
								<button type="button" class="btn-more"><span>더보기</span></button>
							</div>
						</div>
						<div class="comment-body">
							<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
						</div>
					</li>
				</ul>
			</div>
			<!-- //댓글 영역 -->
		</div>
	</div>
</template>

<script>
// import IconLike from "../../../components/icon/IconLike.vue"
// import IconComment from "../../../components/icon/IconComment.vue"
export default {
	components:{
		// IconLike,IconComment
	}

}
</script>

<style lang="scss" scoped>
.container{margin-top:30px;}
.title{font-size: 30px;}
.bnt-container{
	display: flex;
	justify-content: right;
	[class^=btn-]{border:solid 1px #eee; padding:5px 20px; border-radius: 10px;
		transition: all .5s;
		&+[class^=btn]{margin-left:10px;}
		&:hover{background: #707077; color:#fff;}
	}
}

.mphoto-view{
	display: flex;
	margin-top: 30px;
	.main-photo{
		width:50%;
		.thumb{
			max-width: 640px;
			border:solid 1px #e1e1e1;
			border-radius: 20px;
			overflow: hidden;
			img{vertical-align: top; width: 100%;}
		}
		.info-box{
			padding:15px;
			.title{
				font-size: 18px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.detail{
				display: flex;
				margin-top:10px;
				.icon-comment{margin:0 10px;}
				.time {
					display: flex;
					align-items:center;
					&::before{content: ""; width:2px; height: 2px; background: #000; display: block; margin-right: 5px;}
				}
			}
		}
	}
	.list-photo{
		max-height: 550px;
		max-width: 600px;
		overflow-y: scroll;
		margin-left: auto;
		ul {
			li {
				display: flex;
				margin-bottom:10px;
				.thumb{width:320px;}
				.info-box{
					padding:10px 20px;
					.title{font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.detail{
						display: flex;
						margin-top:10px;
						.icon-comment{margin:0 10px;}
						.time {
							display: flex;
							align-items:center;
							&::before{content: ""; width:2px; height: 2px; background: #000; display: block; margin-right: 5px;}
						}
					}
				}
				
			}
		}
	}
}


.m-detail{
	background-color: rgba(230, 242, 230, 0.66);
	padding:20px;
	position: relative;
	margin-top:20px;
	h2{font-size: 16px;}
	.owner{
		display: flex;
		align-items: flex-end;
		margin-top:10px;
		img{width:50px;}
		.nick{font-size: 14px; margin-left: 20px;}
	}
	.btn-container{
		position:absolute;
		right:20px;bottom:20px;
		a{padding:5px 20px; border:solid 1px #e1e1e1; background: #fff; border-radius: 5px;
			& + a {margin-left: 10px;}
		}
	}
}



.comment-header{
	display: flex;
	justify-content: space-between;
	.total{
		display: flex;
		&::before{
			content: "";
			display: block;
			width: 20px;
			height: 20px;
			margin-right: 10px;
			// background: url('@/assets/images/icon/icon_comment_25.png') 0 0 no-repeat;
			background-size: 100% 100%;
		}
	}
	.tab{
		a{font-size: 14px; border:0; padding:0 10px;
			&.active{font-weight: bold;}
			& + a {margin-left:10px;}
		}
	}
}
.board-comment{margin-top:20px;}

.comment-list{
	li{margin-top:10px;
		&.block .comment-body{color:#f51414;}
	}
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
		.nick{margin-left: 10px;
			display: flex;
			align-items: center;
			position: relative;
			em{margin-left: 10px; color:#f51414;}
			.layer-pop{
				position: absolute;
				bottom:-5px;
				background: #fff;
				text-align: left;
				padding:5px 15px;
				border-radius: 5px;
				li{margin:0; padding:5px 0; white-space: nowrap;}
			}
		}
		.commnet-info{
			margin-left: auto;
			font-size:$sf;
			display: flex;
			align-items: center;
			.dot {
				display: flex;
				align-items:center;
				&::before{content: ""; width:2px; height: 2px; background: #000; display: block; margin-right: 5px;}
			}
			.time{font-size: 14px; margin-left:10px;}
			button{margin-left: 10px;
				&.btn-more{
					font:0/0 a;
					width: 20px; height: 20px;
					// background: url('@/assets/images/icon/ico_more.svg') 50% 50% no-repeat;
					background-size: 15px 15px;
					position: relative;
					.layer-pop{
						position: absolute;
						white-space: nowrap;
						top:calc(100% + 10px); right:0;
						background: #fff;
						text-align: left;
						padding:5px 15px;
						border-radius: 5px;
						li{margin:0; padding:5px 0; white-space: nowrap; font-size: 14px; line-height: 22px;}
					}
				}
			}
		}
	}
	.comment-body{padding:20px; border:solid 1px #eee; border-radius:0 0 10px 10px;}
}
</style>
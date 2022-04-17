<template>
	<div class="board-comment">
		<div class="comment-total">
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
					<div class="commnet-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
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
					<button type="button" class="nick"><span>감스트주보리우결단</span> <em>슈퍼 관종임</em></button>
					<div class="commnet-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span></button>
					</div>
				</div>
				<div class="comment-body">
					<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
				</div>
			</li>
			<li class="block">
				<div class="comment-header">
					<div class="thumb">
						<img src="@/assets/images/icon_thumb.png" alt="">
					</div>
					<span class="tag">BEST</span>
					<button type="button" class="nick"><span>감스트주보리우결단</span></button>
					<div class="commnet-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span>
							<div class="layer-pop">
								<ul>
									<li>수정</li>
									<li>삭제</li>
								</ul>
							</div>
						</button>
					</div>
				</div>
				<div class="comment-body">
					<p>차단된 사용자의 글과 댓글은 보이지 않습니다.</p>
				</div>
			</li>
			<li>
				<div class="comment-header">
					<div class="thumb">
						<img src="@/assets/images/icon_thumb.png" alt="">
					</div>
					<span class="tag">BEST</span>
					<button type="button" class="nick"><span>감스트주보리우결단</span>
						<div class="layer-pop">
							<ul>
								<li>메모</li>
								<li>작성한 글 보기</li>
								<li>차단</li>
								<li>블랙리스트 추가</li>
							</ul>
						</div>
					</button>
					<div class="commnet-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
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
					<div class="commnet-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span></button>
					</div>
				</div>
				<div class="comment-body">
					<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
				</div>
				<div class="txt-edit" style="margin:0; height:100px">
					<div>텍스트에디터 라인</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import IconLike from "./icon/IconLike.vue"
// import IconComment from "./icon/IconComment.vue"
// import IconView from "./icon/IconView.vue"
export default {
	name:'CommentList',
	components:{
		IconLike
	}
}
</script>

<style lang="scss" scoped>

.comment-total{
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
			background: url('@/assets/images/icon/icon_comment_25.png') 0 0 no-repeat;
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
			background: url('@/assets/images/icon/icon_comment_25.png') 0 0 no-repeat;
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

.txt-edit{
	padding:20px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	margin:30px 0;
	border:solid 1px #333;
}

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
					background: url('@/assets/images/icon/ico_more.svg') 50% 50% no-repeat;
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
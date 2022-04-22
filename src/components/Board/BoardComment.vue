<template>
	<div class="board-cmt">
		<div class="cmt-option">
			<span class="cmt-total"><IconComment></IconComment> <span>댓글 <strong>999,999</strong>개</span></span>
			<div class="cmt-tab">
				<router-link to="/" class="active">최신순</router-link>
				<router-link to="/">인기순</router-link>
			</div>
		</div>
		<ul class="cmt-list">
			<li class="cmt-list-item">
				<div class="cmt-header">
					<div class="thumb">
						<IconAvatar></IconAvatar>
					</div>
					<span class="tag">BEST</span>
					<button type="button" class="nick"><span>감스트주보리우결단</span></button>
					<div class="cmt-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span></button>
					</div>
				</div>
				<div class="cmt-body">
					<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
				</div>
				<ul class="cmt-list">
					<li class="cmt-list-item">
						<div class="cmt-header">
							<div class="thumb">
								<IconAvatar></IconAvatar>
							</div>
							<span class="tag">BEST</span>
							<button type="button" class="nick"><span>감스트주보리우결단</span></button>
							<div class="cmt-info">
								<IconLike></IconLike>
								<span class="time dot">대 댓글</span>
								<span class="time dot">16:29</span>
								<button type="button" class="dot"><span>신고</span></button>
								<button type="button" class="btn-more"><span>더보기</span></button>
							</div>
						</div>
						<div class="cmt-body">
							<p>대댓글 영역이란 말이지</p>
						</div>

						<ul class="cmt-list">
							<li class="cmt-list-item">
								<div class="cmt-header">
									<div class="thumb">
										<IconAvatar></IconAvatar>
									</div>
									<span class="tag">BEST</span>
									<button type="button" class="nick"><span>감스트주보리우결단</span></button>
									<div class="cmt-info">
										<IconLike></IconLike>
										<span class="time dot">대 댓글</span>
										<span class="time dot">16:29</span>
										<button type="button" class="dot"><span>신고</span></button>
										<button type="button" class="btn-more"><span>더보기</span></button>
									</div>
								</div>
								<div class="cmt-body">
									<p>대대댓글 영역이란 말이지</p>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="cmt-list-item">
				<div class="cmt-header">
					<div class="thumb">
						<img src="@/assets/images/icon_thumb.png" alt="">
					</div>
					<span class="tag">BEST</span>
					<button type="button" class="nick"><span>감스트주보리우결단</span> <em>슈퍼 관종임</em></button>
					<div class="cmt-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span></button>
					</div>
				</div>
				<div class="cmt-body">
					<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
				</div>
			</li>
			<li class="cmt-list-item block">
				<div class="cmt-header">
					<div class="thumb">
						<img src="@/assets/images/icon_thumb.png" alt="">
					</div>
					<span class="tag">BEST</span>
					<button type="button" class="nick"><span>감스트주보리우결단</span></button>
					<div class="cmt-info">
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
				<div class="cmt-body">
					<p>차단된 사용자의 글과 댓글은 보이지 않습니다.</p>
				</div>
			</li>
			<li class="cmt-list-item">
				<div class="cmt-header">
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
					<div class="cmt-info">
						<IconLike></IconLike>
						<span class="time dot">대 댓글</span>
						<span class="time dot">16:29</span>
						<button type="button" class="dot"><span>신고</span></button>
						<button type="button" class="btn-more"><span>더보기</span></button>
					</div>
				</div>
				<div class="cmt-body">
					<p>무야호~~ 그만큼 우릴 호구로 보신단거지~~</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import IconAvatar from "@/assets/icon/IconAvatar.vue"
import IconComment from "@/assets/icon/IconComment.vue"
export default {
	name:'cmtList',
	components:{
		IconComment,
		IconAvatar
	}
}
</script>

<style lang="scss" scoped>

.cmt-option{
	display: flex;
	justify-content: space-between;
	padding:0 10px;
	.cmt-total{
		display: flex;
		align-items: center;
		font-size: $sf;
		svg{width:18px; height: 18px; margin-right:5px;}
	}
	.cmt-tab{
		a{font-size:$mf; border:0;
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

.cmt-list{
	margin-top:10px;
	border-top:solid 1px #e1e1e1;
	> .cmt-list-item{border:solid 1px #bbb; margin-top:10px;}
	.cmt-list{
		padding-left: 20px;
		border-bottom:solid 1px #bbb;
		&:last-child{border-bottom:0;}
		.cmt-list-item{margin-top:0; border:0;}
	}
		// &.block .cmt-body{color:#f51414;}
	// .cmt-list-item{ margint-
	// }
	// ul {margin-left: 20px;
	// 	li {border-top:solid 1px #bbb;}
	// }
	.cmt-header{
		border-bottom:solid 1px #eee;
		padding:10px 20px 5px;
		display: flex;
		justify-content: left;
		align-items: center;
		.thumb{width:30px; border-radius: 50%;
			img{display: block; width: 100%;}
			svg{width:24px;height: 24px; border:solid 1px #000; border-radius: 50%;}
		}
		.tag{padding:2px 5px; color:#fff; background: #fb8488; border-radius: 30px;margin-left: 10px;font-size: 10px;}
		.nick{
			margin-left: 10px;
			display: flex;
			align-items: center;
			position: relative;
			font-size: 12px;
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
		.cmt-info{
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
	.cmt-body{padding:10px 20px;}
}
</style>
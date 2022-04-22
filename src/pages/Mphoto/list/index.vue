<template>
	<div class="mphoto-box">
		<ul>
			<li>
				<router-link to="/mphoto/detail">
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
				</router-link>
			</li>
			<li>
				<router-link to="/mphoto/detail">
					<div class="thumb">
						<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
					</div>
					<div class="info-box">
						<h2 class="title">움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표..</h2>
						<div class="detail">
							<IconLike></IconLike>
							<IconComment></IconComment>
							<span class="time">18시간 전</span>
						</div>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/mphoto/detail">
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
				</router-link>
			</li>
			<li>
				<router-link to="/mphoto/detail">
					<div class="thumb">
						<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
					</div>
					<div class="info-box">
						<h2 class="title">움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표..</h2>
						<div class="detail">
							<IconLike></IconLike>
							<IconComment></IconComment>
							<span class="time">18시간 전</span>
						</div>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/mphoto/detail">
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
				</router-link>
			</li>
			<li>
				<router-link to="/mphoto/detail">
					<div class="thumb">
						<!-- <img src="@/assets/images/m_thumb.png" alt="썸네일"> -->
					</div>
					<div class="info-box">
						<h2 class="title">움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표.. 움짤 제목을 길게 보여주면서 길 면 2줄까지 보여주고 말줄임표..</h2>
						<div class="detail">
							<IconLike></IconLike>
							<IconComment></IconComment>
							<span class="time">18시간 전</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import IconLike from "../../../components/icon/IconLike.vue"
import IconComment from "../../../components/icon/IconComment.vue"
// import IconView from "../../components/icon/IconView.vue"
export default {
	name: "MovePhoto",
	components:{
		IconLike,IconComment,
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
	margin-left: 20px;
	display: flex;
	align-items: center;
	.btn-hot{height: 40px; display: flex; align-items: center;}
	.btn-hot svg{width: 20px; height:20px}
	.btn-search svg{width: 20px; height: 20px;}
	.btn-search input{width:0; border:0; transition: all .5s; cursor: pointer; margin:0 10px 0 10px; height: 40px; border-bottom:solid 1px transparent}
	.btn-search label{display: flex;align-items: center; cursor: pointer;}
	.btn-search label:active,
	.btn-search label:focus,
	.btn-search label:hover
	{
		input{width: 200px; border-bottom:solid 1px #777; padding:0 10px;}
	}
}


// 움짤
.sort-box{
	display: flex;
	button{
		font-size: 16px;
		margin-right: 20px;
		span{display: flex; align-items: center;}
		svg{width:16px; margin-left: 5px;}
		&.active{font-weight: bold;}
	}
	.btn-upload {border:solid 1px #000; border-radius: 5px; padding:5px 20px;
		transition: all .5s;
		&:hover{
			background: #000;
			color:#fff;
		}
	}
}
.mphoto-box {
	ul{	display: flex; flex-wrap: wrap;
		li{
			width: 24%;
			margin-bottom:30px;
			margin-right:1%;
			.thumb{
				border:solid 1px #e1e1e1;
				border-radius: 20px;
				overflow: hidden;
				img{vertical-align: top; width: 100%;}
			}
			.info-box{
				padding:15px;
				.title{font-size: $mf;
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
</style>
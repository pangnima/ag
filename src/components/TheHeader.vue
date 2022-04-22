<template>
	<header class="header">
		<div class="container">
			<div class="gnb">
				<div class="logo">
					<h1><router-link to="/">아게더 로고</router-link></h1>
				</div>
				<nav>
					<router-link to="/boardall">전체 글</router-link>
					<router-link to="/mphoto">움짤</router-link>
					<router-link to="/place">플레이스</router-link>
					<router-link to="/review">방송 리뷰</router-link>
				</nav>
			</div>
			<div class="info">
				<button type="button" class="btn-search">
					<IconSearch></IconSearch>
				</button>
				<button type="button" class="btn-my">
					<IconAvatar></IconAvatar>
				</button>
			</div>
		</div>
	</header>
</template>

<script>
import IconAvatar from '@/assets/icon/IconAvatar.vue';
import IconSearch from '@/assets/icon/IconSearch.vue';
export default {
	name: 'TheHeader',
	components:{
		IconAvatar,
		IconSearch
	}
}
</script>


<style lang="scss" scoped>
	.header{
		padding:15px 0;
		border-bottom:solid 1px #606060;
		.container{display:flex; width:1330px; margin:0 auto; align-items:center;
		.gnb{display:flex;
			.logo{
				a{font:0/0 a; display: block; background:url("../assets/images/logo.png") 0 0 no-repeat; width:40px; height:40px; background-size:100% 100%;}
			}
			nav{font-size:16px;margin-left:30px;display: flex; 
				a{padding:5px 15px; height:100%; box-sizing: border-box;
					display: flex; align-items: center;
					&.router-link-active{
						font-weight: bold;
						position: relative;
					}
				}
			}
		}
		.info{display:flex; margin-left:auto; align-items:center;
	}
	}}
	button[class^="btn"]{display:flex; background:none; width:30px; border:0; cursor:pointer; align-items:center; justify-content:center;
		&.btn-search svg{width:25px;}
		&.btn-my{
			border-radius: 50%;
			width: 30px;
			height: 30px;
			transition: background .5s;
			margin-left: 10px;
			border:solid 1px #606060;
			&:hover{background: #707070;
				svg{fill:#fff;}
			}
			svg{ width:20px;height:20px; fill: #606060;}
		} 
	}
</style>

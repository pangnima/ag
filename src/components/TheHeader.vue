<template>
	<header class="header">
		<div class="container">
			<div class="gnb">
				<div class="logo">
					<h1><router-link to="/">아게더 로고</router-link></h1>
				</div>
				<nav>
					<router-link to="/moa">모아보기</router-link>
					<router-link to="/tiki">티키타카</router-link>
					<router-link to="/mphoto">움짤</router-link>
					<router-link to="/clip">클립</router-link>
					<router-link to="/place">플레이스</router-link>
					<router-link to="/review">방송 리뷰</router-link>
					<router-link to="/bjinfo">BJ 정보</router-link>
				</nav>
			</div>
			<div class="info">
				<button type="button" class="btn-search">
					<IconSearch></IconSearch>
				</button>
				<button type="button" class="btn-my">
					<IconPeople></IconPeople>
				</button>
			</div>
		</div>
	</header>
</template>

<script>
import IconSearch from '@/assets/icon/ico_search.vue';
import IconPeople from '@/assets/icon/ico_people.vue';
export default {
	name: 'TheHeader',
	components:{
		IconSearch,
		IconPeople
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
				h1{
					a{display: block; background:url("../assets/images/logo.png") 0 0 no-repeat; width:61px; height:72px; font-size:0;}
				}
			}
			nav{font-size:18px;margin-left: 30px;display: flex; 
				a{padding:5px 15px; height:100%; box-sizing: border-box;
					display: flex; align-items: center;
					&.router-link-active{
						font-weight: bold;
						position: relative;
						// &:after{
						// 	content:"";
						// 	position: absolute;
						// 	bottom:-1px;
						// 	left:0; right:0;
						// 	height:2px;
						// 	background: #000;
						// }
					}
				}
			}
		}
		.info{display:flex; margin-left:auto; align-items:center;
	}
	}}
	button[class^="btn"]{display:flex; background:none; width:30px; border:0; cursor:pointer; align-items:center; justify-content:center;
		&.btn-search svg{width: 25px;}
		&.btn-my{
			background: #ccc;
			border-radius: 50%;
			width: 30px;
			height: 30px;
			transition: background .5s;
			margin-left: 10px;
			&:hover{background: #707070;}
			svg{width: 40px; fill:#fff;}
		} 
	}
</style>

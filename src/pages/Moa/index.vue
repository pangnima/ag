<template>
	<div class="container">
		<h2 class="title">모아보기</h2>
		<div class="sub-menu">
			<div class="tab">
				<router-link to="/moa/ib/">인방갤</router-link>
				<router-link to="/moa/ag/">아게더</router-link>
			</div>
			<div class="search-box">
				<button type="button" class="btn-hot"><IconFire></IconFire></button>
				<button type="button" class="btn-search"><IconSearch></IconSearch></button>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import IconSearch from '@/assets/icon/ico_search.vue';
	import IconFire from '@/assets/icon/ico_fire.vue';
	export default {
		name: 'MoaPage',
		components:{
			IconSearch,
			IconFire
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
	button{border:0; background: none;
		& + button{margin-left: 15px;}
		&.btn-hot svg{width: 25px;}
		&.btn-search svg{width: 25px;}
	}
}

</style>
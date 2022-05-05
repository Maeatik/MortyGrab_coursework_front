<template>
	<div class="container">
		<header class="head" >

			<div class="panel-body">

				<router-link role="button" class="btn btn-lg btn-block" :to="{name: 'Login', params: {id: 0}}">
					Перейти в режим Админа
				</router-link>
				<h1 style="font-family: Montserrat; font-weight: bold"> MortyGrab</h1>
			</div>

			<form @submit="handleSubmit">
				<input class="field form-control" type="text"  style="background-color: #f0f0f0" v-model="link">
				<button class="btn" style="" v-model="parseItem" v-on:click="visible = true"> ЗАПАРСИТЬ</button>
			</form>
		</header>
		<div class="info"> Это сервис для сбора текста. Вставьте ссылку и отправьте собранный текст на проверку</div>
	</div>
</template>

<script>

	import {mapActions, mapState} from 'vuex';

	export default {
		name: 'parse',
		data(){
			return{
				link: this.$route.params.url,
				visible : false,
				showForm: false
			}
		},

		computed: {
			parse() {
				return this.id !== 0 ?
					this.$store.state.parse.find(item => item.id === this.id) :
					null;
			},
			...mapState({
				parse: state => state.parse,
			})
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault()
				const item = {
					url: this.link
				};
				if (this.link !== "") {
					item.url = this.link
					await this.parseItem(item);
					await this.$router.push({name: "loader"})
				} else {
					this.visibile = false
				}
			},
			...mapActions([
				'parseItem',
			])
		},
	}
</script>

<style>
	body{
		background-image: url("https://catherineasquithgallery.com/uploads/posts/2021-02/1612690478_2-p-zelenii-vektor-abstraktnii-fon-2.jpg");
	}

	.container{
		text-align: center;
		align-content: center;
	}
	.head{
		position: center;
	}
	.info{
		font-family: Montserrat;
		margin-top: 15px;
		color: #000000;
		font-size: 30px;
		background-color: #a3dbb6;
		border-radius: 4px;

	}
	.field{
		align-content: center;
		margin-top: 75px;
		margin-bottom: 75px;
		text-align: center;

		size: 80px;
		border-radius: 12px;
	}

	.btn{
		color: #000000;
		font-family: Montserrat;

		align-content: center;
		border: none;
		background-color: #a3dbb6;
		border-radius:12px ;
		border: 5px solid #a3dbb6;
		transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
	}

	.btn:hover {
		color: #f0f0f0 !important;
		background-color: transparent;
		text-shadow: firebrick;
	}
	.btn:active{
		color: #f0f0f0;
		border: none;
	}
	.btn:hover:before {
		right: 0%;
		left: auto;
		width: 100%;
	}
	btn:before {
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 0px;
		z-index: -1;
		content: '';
		border: none;

		transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
	}
	.spinner {
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.spinner:after {
		animation: changeContent .8s linear infinite;
		display: block;
		content: "⠋";
		font-size: 80px;
	}

	@keyframes changeContent {
		10% { content: "⠙"; }
		20% { content: "⠹"; }
		30% { content: "⠸"; }
		40% { content: "⠼"; }
		50% { content: "⠴"; }
		60% { content: "⠦"; }
		70% { content: "⠧"; }
		80% { content: "⠇"; }
		90% { content: "⠏"; }
	}
</style>

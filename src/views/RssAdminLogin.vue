<template>
	<div>
    <input class="field" type="text"  style="" v-model="login">
		<input class="field" type="text"  style="" v-model="password">
		<button type="button" class="btn btn-sm btn-link" @click="loginAdmin()">Зайти как админ</button>
	</div>
</template>

<script>
    export default {
			name: "RssAdminLogin",
			data(){
				return{
					login: this.$route.params.login,
					password: this.$route.params.password
				}
			},
			methods: {
        	async loginAdmin(){
        		if (this.login == "admin" && this.password == "admin"){
							this.$router.push({path: "/:id"})
						}
					}
			}
    }
</script>

<style scoped>

</style>

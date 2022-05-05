import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import RssList from "./views/RssList";
import RssAdmin from "./views/RssAdmin";
import RssAdminLogin from "./views/RssAdminLogin";
import LoaderAdmin from "./views/LoaderAdmin";




Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/", name: "loaderAdmin", component: LoaderAdmin },
		{ path: "/app", component: App, children: [
				{ path: "/app", name: "app", component: RssList},
				{ path: "/login", name: "Login", component: RssAdminLogin},
				{ path: "/:id", name: "Admin", component: RssAdmin },
		]},
	]
});

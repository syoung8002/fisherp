<template>
    <v-app>
        <v-app-bar 
                app 
                clipped-left 
                flat
                color="primary"
        >
            <v-toolbar-title>
                <span class="second-word font uppercase"
                    style="font-weight:700;"
                >
                    <v-app-bar-nav-icon
                        @click="openSideBar()"
                        style="z-index:1;
                        height:56px;
                        width:30px;
                        margin-right:10px;
                        font-weight:300;
                        font-size:55px;"
                    >
                        <div style="line-height:100%;">≡</div>
                    </v-app-bar-nav-icon>
                </span>
            </v-toolbar-title>

            <v-btn icon to="/">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            
            <v-spacer></v-spacer>

            <b style="margin-left:10px">{{username}} 님</b>
            <v-btn
                text
                color="white"
                style="font-size:10px"
                @click="logout()"
            >
                Logout
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer 
                v-model="sideBar"
                app 
                clipped 
                flat 
        >
            <v-list>
                <v-list-item
                    class="px-2"
                    key="accounts"
                    to="/masters/accounts"
                    color="primary"
                    style="font-weight:700;"
                >
                    거래처
                </v-list-item>
                <v-list-item
                    class="px-2"
                    key="items"
                    to="/masters/items"
                    color="primary"
                    style="font-weight:700;"
                >
                    품목
                </v-list-item>

                <v-list-item
                    class="px-2"
                    key="purchases"
                    to="/purchases/purchases"
                    color="primary"
                    style="font-weight:700;"
                >
                    매입
                </v-list-item>

                <v-list-item
                    class="px-2"
                    key="queryPurchases"
                    to="queryPurchases"
                    color="primary"
                    style="font-weight:700;"
                >
                    QueryPurchase
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "App",
        data: () => ({
            sideBar: true,
            username: '',
        }),
        created() {
            var me = this
            me.username = me.$OAuth.idTokenParsed.preferred_username

            if(!me.username){
                location.reload()
            }
        },
        methods: {
            openSideBar(){
                this.sideBar = !this.sideBar
            },
            logout(){
                if(confirm("로그아웃 하시겠습니까?")){
                    localStorage.clear()
                    location.href = 'http://localhost:9090/realms/master/protocol/openid-connect/logout'
                }
            },
        }
    };
</script>

<style>
</style>

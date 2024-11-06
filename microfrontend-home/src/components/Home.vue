<template>
    <v-container fluid>
        <div style="width:100%; margin:0px 0px 20px 0px; position: relative;">
            <v-img style="width:100%; height:300px;"
                src=""
            ></v-img>
            <div class="App-main-text-overlap">
                
            </div>
            <div class="App-sub-text-overlap">
                
            </div>
        </div>
        <v-row>
            <v-col v-for="(aggregate, index) in aggregate" 
                    :key="index"
                    cols="4"
                    class="d-flex justify-center" 
            >
                <div 
                    class="flip-card"
                    @mouseover="flipCard(index)"
                    @mouseleave="unflipCard(index)"
                    :class="{ 'is-flipped': flipped[index] }"
                >
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <v-card
                                class="mx-auto"
                                style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                outlined
                            >
                                <v-list-item style="padding:15px; margin:0px;">
                                    <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                </v-list-item>
                                <div style="text-align: left; padding:10px 15px 15px 15px; margin-top:-10px;">
                                    <h2>{{ aggregate.title }}</h2>
                                    <div>{{ aggregate.description }}</div>
                                </div>
                            </v-card>
                        </div>
                        <div class="flip-card-back">
                            <v-card
                                color="primary"
                                class="mx-auto"
                                style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                outlined
                                :key="aggregate.key"
                                :to="aggregate.route"
                            >
                                <v-list-item style="padding:15px; margin:0px;">
                                    <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                </v-list-item>
                                <h2 style="color:white;">{{ aggregate.title }} 관리</h2>
                            </v-card>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>  
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        flipped: [],    
        aggregate: [
            { 
                title: '거래처', 
                description: '다음의 정보를 관리하는 거래처 어그리거트: 거래처명, 대표자, 사업자 번호, 주소, 업종, 종목, 거래처구분', 
                key: 'accounts', 
                route: '/masters/accounts',
                ImageUrl: '',
            },
            { 
                title: '품목', 
                description: '다음의 품목정보를 관리하는 어그리거트:
- 품명
- 코드
- 단위', 
                key: 'items', 
                route: '/masters/items',
                ImageUrl: '',
            },
            { 
                title: '매입', 
                description: '매입 정보를 관리하는 Aggregate', 
                key: 'purchases', 
                route: '/purchases/purchases',
                ImageUrl: '',
            },
        ],
    }),
    methods: {
        flipCard(index) {
            this.$set(this.flipped, index, true);
        },
        unflipCard(index) {
            this.$set(this.flipped, index, false);
        },
    }
}
</script>

<style>
</style>

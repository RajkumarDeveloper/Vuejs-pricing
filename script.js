Vue.component('pricing', {
    template: `
    <div id="features-table-wrap" class="row features-container-header" data-equalizer="" data-resize="53j9lq-eq" data-mutate="fhrwv3-eq" data-t="kfynir-t" style="" data-events="resize">
        <div class="columns small-3 no-pd">
            <div class="row no-mg left-column-labels">
                <div class="columns small-12 referenceDivForColor" style="min-height: 340px;" data-equalizer-watch="">
                </div>
                <div v-for="feature,index in prices.features" :class="['columns small-12 field-label', (((index+1)%2)!=0)?'white':'']">
                   {{ feature.name }}<b class="tooltips qm_property_text" :data-tooltip-custom="feature.tooltip">?</b> </div>
            </div>
        </div>
        <div class="columns large-3  medium-12 features-container " v-for="plans,planindex in prices.plan">
        <div :class="['row no-mg',(plans.current)?'current_plan_parent_whole':'']" id="features-container-header" data-equalizer-watch="" data-equalizer="" data-resize="j5t6dm-eq" data-mutate="gy6b7j-eq" data-t="lt1uv9-t" data-events="mutate" style="height: auto;">
        <div class="shop-wrap">
            <div class="specialheading"><b v-if="plans.current">Current</b></div>

            <h4>{{ plans.name }}</h4>
            <h5><span class="pricing_span">$ {{ plans.price }}</span> / mo</h5>
            <p>{{ plans.content }}
                </p>
                <button @click.native="redirect_to_chargephp" onclick="redirect_to_chargephp('Starter',4.9,'VWl3NTZIRkpFdjA2VTNXamd1R2w5QT09','');" :class="['button',(plans.current)?'current':'hollow']" ><span v-if="!plans.current">Choose Plan</span><b v-if="plans.current">Current</b></button>
        </div>

    </div>
    <div class="row no-mg">
        <div class="columns small-12 field-value no-pad">

            <div class="row no-mg " data-redpropmsg="" v-for="feature,index in prices.features">
                <div :class="['columns small-12 field-value', (((index+1)%2)!=0)?'white':'']" >
                    <span class="for-smaller-screens">{{ feature.name }}</span>
                    <span class="invisible-text">a</span>
                    <div v-if="plans.features[index]!=true" class="centered-on-large-right-on-small">{{ plans.features[index]}}</div>
                    <img v-if="plans.features[index]==true" class="ok centered-on-large-right-on-small" src="ok-icon.svg" alt="">
                </div>
            </div>

            <div class="row no-mg">
                <div class="columns small-12 field-value button-wrap invisible-text white">
                <button onclick="redirect_to_chargephp('Starter',4.9,'VWl3NTZIRkpFdjA2VTNXamd1R2w5QT09','');" :class="['button',(plans.current)?'current':'hollow']" ><span v-if="!plans.current">Choose Plan</span><b v-if="plans.current">Current</b></button>

                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
	`,
    props: ['prices'],
    methods: {
        redirect_to_chargephp() {
            this.$emit('onEditValue', this.name, this.email);
        }
    }
});
Vue.component('contact-us', {
    template: `
    <section class="requirements">
    <div class="row">
        <div class="small-12 column">
            <h1 class="heading_title">{{ title }}</h1>
            <a href="#" @click="embedded_contact" class="button" style="font-size: 20px;padding: .95em 2em .75em;">{{ buttonText }}</a>

        </div>
    </div>
    </section>
	`,
    props: ['title', 'buttonText', 'contactUrl'],
    methods: {
        embedded_contact() {
            alert('contact popup');
        }
    },
});
Vue.component('faqs', {
    template: `
    <section class="pricing_faq">
        <div class="column row">
            <h1 class="heading_title">{{ title }}</h1>
        </div>
        <div class="row" data-equalizer="" data-equalize-by-row="true" data-resize="tffzco-eq" data-mutate="0r68p4-eq" data-t="5vut2u-t" data-events="mutate">
            <div class="medium-6 column" v-for="(answer,question) in faqs" data-equalizer-watch="" style="height: auto;">
                <h2> {{ question }} </h2>
                <p>{{ answer }} </p>
            </div>
            
        </div>
    </section>
	`,
    props: ['title', 'faqs'],
});
new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    created() {

    }
});
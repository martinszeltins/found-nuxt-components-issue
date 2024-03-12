export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
        strict: true
    },

    modules: [
        'nuxt-primevue'
    ],

    css: [
        '~/common/assets/css/app.css',
    ],

    primevue: {
        options: {
            ripple: false,
        },

        components: {
            prefix: 'Prime',
            include: ['Menu', 'Card', 'Chip', 'InlineSvg', 'Steps', 'Dialog', 'Avatar', 'Column', 'Button', 'Message', 'Divider', 'TabView', 'Checkbox', 'Textarea', 'Calendar', 'Dropdown', 'TabPanel', 'Password', 'Skeleton', 'InputText', 'DataTable', 'InputSwitch', 'MultiSelect', 'ProgressBar', 'InputNumber', 'ConfirmPopup', 'OverlayPanel', 'Rating']
        },

        composables: {
            include: ['useConfirm']
        },

        directives: {
            exclude: ['Tooltip']
        },    
    },
})
  
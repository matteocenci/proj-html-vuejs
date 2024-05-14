<script>
export default {
    props: {
        results: Object
    },
    data() {
        return {
            hover: false
        }
    },
    methods: {
        count(num) {

            let i = 0;
            if (this.hover && i < num) {
                return setInterval(() => {
                    i++;
                }, 100);
            }
        }
    }
}
</script>


<template>

    <section @mouseover="hover = true">
        <div>
            <h6>WHAT ARE WE DOING</h6>
            <h3>Results in Numbers</h3>
            <p>Our goal is to exceed expectations by delivering the best job possible.</p>
        </div>
        <ul>
            <li>
                <span class="primary-color">{{ this.i < results.certifications ? count() : results.certifications }}</span>
                <span>Certifications</span>
            </li>
            <li>
                <span class="primary-color">{{ this.i < results.employees ? count() : results.employees}}</span>
                <span>Employees</span>
            </li>
            <li>
                <span class="primary-color">{{ this.i < results.customers ? count() : results.customers}}</span>
                <span>Customers</span>
            </li>
            <li>
                <span class="primary-color">{{ this.i < results.countries ? count() : results.countries }}</span>
                <span>Countries Served</span>
            </li>

        </ul>

    </section>

</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

section {
    padding: 40px 0;
    width: 100%;
    @include flex(column, space-evenly, center);
    background-color: black;

    h6 {
        color: $primary-color;
        text-align: center;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        color: white;
        margin-bottom: 50px;
    }

    ul {
        @include flex(row, space-evenly, center);
        width: 100%;
        margin-bottom: 50px;

        li {
            width: calc(100% / 4);
            @include flex(column, space-evenly, center);
            color: white;

            .primary-color {
                color: $primary-color;
                font-size: 3rem;
                font-weight: bold;
            }
        }
    }
}
</style>
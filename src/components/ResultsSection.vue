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
    created: {
        count(num) {

            let i = 0;
            if (hover && i < num) {
                return setInterval(() => {
                    i++;
                }, 500);
            }
        }
    }
}
</script>


<template>

    <section @mouseover="this.hover === true">
        <div>
            <h6>WHAT ARE WE DOING</h6>
            <h3>Results in Numbers</h3>
            <p>Our goal is to exceed expectations by delivering the best job possible.</p>
        </div>
        <ul>
            <li>
                <span>{{ count(results.certifications) }}</span>
                <span>Certifications</span>
            </li>
            <li>
                <span>{{ count(results.employees) }}</span>
                <span>Employees</span>
            </li>
            <li>
                <span>{{ count(results.customers) }}</span>
                <span>Customers</span>
            </li>
            <li>
                <span>{{ count(results.countries) }}</span>
                <span>Countries Served</span>
            </li>

        </ul>

    </section>

</template>


<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as *;

h6 {
    color: $primary-color;
}

section {
    width: 100%;
}
</style>
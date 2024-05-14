<script>
import { store }  from '../store.js'; 
export default {
    data () {
        return {
            store,
            menu: [
                {
                    title: "Home",
                    routeName: "home",
                },
                {
                    title: "About",
                    routeName: "about",
                }
            ]
        }

    }
}

</script>

<template>
    
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><router-link :to="{name: 'home'}">Home</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link :to="{name: 'about'}">About</router-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><router-link :to="{name: 'contacts'}">Contact Us</router-link></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<style scoped lang="scss">
.navbar {
    background-image: linear-gradient(-45deg, #1b4965 0%, #0d1b2a 100%);
    a {
        color: #bec1ce;
        text-decoration: none;
        &:hover {
            color: #058283;
        }
    }
}

</style>
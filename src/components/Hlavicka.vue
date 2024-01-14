<template>
    <header class="header">
        <nav class="container">
            <ul class="nav">
                <li v-for="link in links" :key="link.path">
                    <router-link :to="link.path" class="link">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            links: [
                { name: 'Home', path: '/' },
                { name: 'O dogtrekkingu', path: '/aboutDogtrek' },
                { name: 'Pravidlá dogtrekkingu', path: '/pravidla' },
                { name: 'O mne', path: '/about' },
                { name: 'Kalendar podujati', path: '/kalendar' },
                { name: 'Zahraničné akcie', path: '/zahranicie' },
            ],
        };
    },
};
</script>

<style scoped >
.header {
  padding: 16px 0;
  background-color: #584B53;
}
.nav {
  display: flex;
  list-style: none;
}

.link {
  padding: 4px 8px;
  color: white;
  text-decoration: none;
 
  font-size: 18px;
}

.link:hover {
    background-color:white;
    color: #584B53 ;
}
</style>




  
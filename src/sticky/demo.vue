<template>
    <div class="wrapper">

        <y-sticky :distance="distance">
            <div style="border:1px solid red;">我是段落</div>
        </y-sticky>
        <p>xxx1</p>
        <p>xxx2</p>
        <p>xxx3</p>
        <p>xxx4</p>
        <p>xxx5</p>
        <p>xxx6</p>
        <p>xxx7</p>
        <p>xxx8</p>
        <p>xxx9</p>
        <p>xxx10</p>
        <p>xxx11</p>
        <p>xxx12</p>
        <p>xxx13</p>
        <p>xxx14</p>
        <p>xxx15</p>
        <p>xxx16</p>
        <p>xxx17</p>
        <p>xxx18</p>
        <p>xxx19</p>
        <p>xxx20</p>
        <p>xxx21</p>
        <p>xxx22</p>
        <p>xxx23</p>
        <p>xxx24</p>
        <p>xxx25</p>
        <p>xxx26</p>
        <p>xxx27</p>
        <p>xxx28</p>
        <p>xxx29</p>
        <p>xxx30</p>
        <p>xxx31</p>
        <p>xxx32</p>
        <p>xxx33</p>
        <p>xxx34</p>
        <p>xxx35</p>
        <p>xxx36</p>
        <p>xxx37</p>
        <p>xxx38</p>
        <p>xxx39</p>
        <p>xxx40</p>
        <p>xxx41</p>
        <p>xxx42</p>
        <p>xxx43</p>
        <p>xxx44</p>
        <p>xxx45</p>
        <p>xxx46</p>
        <p>xxx47</p>
        <p>xxx48</p>
        <p>xxx49</p>
        <p>xxx50</p>
    </div>

</template>

<script>
    import YSticky from './sticky/sticky'

    export default {
        components: {
            YSticky,
        },

        data() {
            return {
                distance:0,
            }
        },

        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .uploader{
        width:300px;
    }

</style>
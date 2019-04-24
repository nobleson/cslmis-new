<template>
<div class="">
    <b-navbar class="navbar-expand-lg navbar-dark bg-dark static-top" toggleable="lg" type="dark" variant="info">
        <div class="container">
        <b-navbar-brand href="#">CSLMIS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Publications</b-nav-item>
                <b-nav-item href="#">Reports</b-nav-item>
                <b-nav-item href="#">About Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>

    <header class=" pb-5">
        <div class="container">

            <!-- Portfolio Item Heading -->
            <h1 class="my-4">CSLMIS
                <small>Get certified</small>
            </h1>

            <!-- Portfolio Item Row -->
            <div class="row">

                <div class="col-md-8">
                    <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            controls
                            indicators
                            background="#ababab"
                            img-width="1024"
                            img-height="480"
                            style="text-shadow: 1px 1px 2px #333;"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                    >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                                caption="First slide"
                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                img-src="https://picsum.photos/1024/480/?image=52"
                        ></b-carousel-slide>

                        <!-- Slides with custom text -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                            <h1>Hello world!</h1>
                        </b-carousel-slide>

                        <!-- Slides with image only -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                        <!-- Slides with img slot -->
                        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class="d-block img-fluid w-100"
                                    width="1024"
                                    height="480"
                                    src="https://picsum.photos/1024/480/?image=55"
                                    alt="image slot"
                            >
                        </b-carousel-slide>

                        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                            </p>
                        </b-carousel-slide>
                    </b-carousel>
                </div>

                <div class="col-md-4">
                    <h3 class="mt-3">Skill Exchange</h3>
                    <p>Labour Market Information System</p>

                    <h3 class="mt-3">Get Trained</h3>
                    <p>Endless possibilities</p>
                </div>

            </div>
            <!-- /.row -->

            <!-- Related Projects Row -->
        </div>
    </header>
    <section class="bg-white pt-5">
        <h3 class="my-4 text-center">Top Training Centers</h3>


        <div class="container">
        <b-row>
            <b-col v-for="(center, index) in topCenters" :key="index" sm="6" md="3" class="mb-4">
                <b-card>
                    <div class="box-part text-center">
                        <i class="fa fa-address-card fa-3x"></i>
                        <div class="title">
                            <h4>{{center.name}}</h4>
                        </div>

                        <div class="text">
                            <span>{{center.description}}</span>
                        </div>

                        <a href="#">Learn More</a>

                    </div>
                    <div slot="footer"><small class="text-muted">Training 33</small></div>

                </b-card>
            </b-col>
        </b-row>
        </div>
        <!-- /.row -->
    </section>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
            <small>Copyright &copy; CSLMIS</small>
        </div>
    </footer>
</div>

</template>

<script>

export default {
  layout: 'empty',
    middleware: 'take-login',
    data(){
      return {
          topCenters: [
              {
                  name: 'Mutual Links',
                  description: 'Teaches computer programming and other technical skills'
              },
              {
                  name: 'Mutual Links',
                  description: 'Teaches computer programming and other technical skills'
              },
              {
                  name: 'Mutual Links',
                  description: 'Teaches computer programming and other technical skills'
              },
              {
                  name: 'Mutual Links',
                  description: 'Teaches computer programming and other technical skills'
              }

          ],
          topCompanies: [
              {
                  name: 'NNPC',
                  description: 'some descrtn to go with it'
              },
              {
                  name: 'NNPC',
                  description: 'some descrtn to go with it'
              },
              {
                  name: 'NNPC',
                  description: 'some descrtn to go with it'
              },
              {
                  name: 'NNPC',
                  description: 'some descrtn to go with it'
              }
          ]
      }
    }
}
</script>

<style>
    #page-content {
        flex: 1 0 auto;
    }



</style>

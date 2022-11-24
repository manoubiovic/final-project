import React from "react";
import "../style/SidebarLeft.css";
const SidebarLeft = () => {
  return (
    <div className="Sidebarproduct">
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Company Logo or Something
            </a>
          </div>
        </div>
      </nav>

      <main class="container-fluid">
        <div class="row">
          <div class="col-xs-12">
            <ul class="nav nav-tabs nav-tabs-left nav-centered" role="tablist">
              <li role="presentation" class="active">
                <a href="#code" data-toggle="tab" role="tab">
                  <span class="fa fa-list"></span>
                </a>
              </li>
              <li role="presentation">
                <a href="#profile" data-toggle="tab" role="tab">
                  <span class="fa fa-phone"></span>
                </a>
              </li>
              <li role="presentation">
                <a href="#favourite" data-toggle="tab" role="tab">
                  <span class="fa fa-heart"></span>
                </a>
              </li>
              <li role="presentation">
                <a href="#download" data-toggle="tab" role="tab">
                  <span class="fa fa-cloud-download"></span>
                </a>
              </li>
              <li role="presentation">
                <a href="#stars" data-toggle="tab" role="tab">
                  <span class="fa fa-star"></span>
                </a>
              </li>
              <li role="presentation">
                <a href="#settings" data-toggle="tab" role="tab">
                  <span class="fa fa-cog"></span>
                </a>
              </li>
            </ul>

            <div id="my_side_tabs" class="tab-content side-tabs side-tabs-left">
              <div class="tab-pane fade in active" id="code" role="tabpanel">
                <div class="col-lg-6">
                  <div class="panel panel-primary">
                    <header class="panel-heading">
                      <h3 class="panel-title">
                        Horizontal Tabs for Bootstrap 3
                      </h3>
                    </header>
                    <section class="panel-body">
                      <p>
                        Sometimes, it's just nicer to have tabs to the side.
                      </p>
                      <p>
                        This is still a work in progress, as I still need to get
                        the right-side tabs written, but left-side tabs are good
                        to go.
                      </p>
                    </section>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="panel panel-default">
                    <header class="panel-heading">
                      <h3 class="panel-title">Features</h3>
                    </header>
                    <section class="panel-body">
                      <p>
                        It would be horrible if the tab panes had a smaller
                        height than the column of tabs to the left, there. As
                        you can see, I've taken care of that with a little
                        jQuery action.
                      </p>
                    </section>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="panel panel-default">
                    <header class="panel-heading">
                      <h3 class="panel-title">To Do...</h3>
                    </header>
                    <ul class="list-group">
                      <li class="list-group-item">
                        Get the right-side-tabs working
                      </li>
                      <li class="list-group-item">
                        Support multiple instances of this "widget" on the same
                        page
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel">
                <p>
                  Quisque mattis lobortis nibh, vitae dictum nisl. Cras
                  consectetur aliquam nisi, sit amet facilisis nisi volutpat
                  vitae. Fusce vitae risus quis eros facilisis fringilla.
                  Quisque eget ultrices ipsum. Mauris nec euismod est, sit amet
                  rhoncus turpis.{" "}
                </p>
              </div>
              <div class="tab-pane fade" id="favourite" role="tabpanel">
                <p>
                  Suspendisse blandit libero id suscipit consectetur. Cras
                  ultrices sem sit amet est efficitur iaculis ut non est. Morbi
                  porttitor eu felis ac aliquet.
                </p>
              </div>
              <div class="tab-pane fade" id="download" role="tabpanel">
                <p>
                  Vestibulum viverra ex ut arcu lobortis tempor. Vivamus
                  suscipit dictum nisl gravida malesuada. Nulla et quam eget
                  massa cursus sodales a quis augue. Maecenas ultrices vitae
                  felis ut faucibus. Vivamus vitae convallis nunc, quis
                  vestibulum eros. Morbi vel purus nec justo efficitur consequat
                  ac sit amet risus. Duis laoreet hendrerit bibendum. Nam tempor
                  volutpat sagittis.
                </p>
              </div>
              <div class="tab-pane fade" id="stars" role="tabpanel">
                <p>
                  Duis laoreet hendrerit bibendum. Nam tempor volutpat sagittis.
                  Etiam convallis posuere rhoncus. Donec sit amet faucibus
                  magna, vel fermentum velit. Vivamus euismod cursus
                  sollicitudin. Aliquam tortor libero, venenatis id nibh
                  consectetur, pretium tincidunt est. Nullam neque odio, auctor
                  in nisl vel, facilisis convallis massa.{" "}
                </p>
              </div>
              <div class="tab-pane fade" id="settings" role="tabpanel">
                <p>
                  Curabitur vel urna vestibulum, egestas sapien accumsan, varius
                  ipsum. Aenean eu elit laoreet, sagittis velit in, facilisis
                  ligula. Maecenas dictum, lacus sed faucibus lobortis, turpis
                  ante ultricies ligula, et posuere nisl mauris non erat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-info">
              <header class="panel-heading">
                <h3 class="panel-title">Nothing Interesting Here</h3>
              </header>
              <section class="panel-body">
                <p>Put something here, if you want.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLeft;

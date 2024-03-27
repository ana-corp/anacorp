<script>
  import ContackInfo from "./ContackInfo.svelte";
  import { alamat, email } from "./data";

  let subject = "";
  let message = "";

  function sendMessage() {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
      "_blank"
    );
  }
</script>

<section id="contact" style="padding-bottom: 8rem;">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h3 class="section-title wow fadeInUp">Hubungi Kami.</h3>
        <p class="subheading wow fadeInUp"></p>
      </div>

      <div class="d-flex">
        <div id="contactform" class="col-md-7 wow fadeInUp">
          <div>
            <input
              name="subject"
              type="text"
              id="subject"
              bind:value={subject}
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              name="comments"
              cols="40"
              rows="3"
              id="comments"
              placeholder="Message"
              bind:value={message}
            ></textarea>

            <button
              class="btn btn-primary btn-md"
              id="submit"
              on:click={sendMessage}
              style="margin-bottom: 6rem;">Kirim Pesan</button
            >
          </div>
        </div>

        <div class="col-md-5 wow fadeInLeft">
          <h4>Alamat :</h4>
          <address
            style="font-size: 18px; display: flex;gap: 1rem;"
            title="Alamat"
          >
            <span>
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style="vertical-align: middle;"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                height="1.5em"
                width="1.5em"
                class="iconify iconify--gis"
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </span>
            <span id="alamat">
              {alamat}
            </span>
          </address>

          <h4>Kontak :</h4>
          <div id="kontak">
            <ContackInfo />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

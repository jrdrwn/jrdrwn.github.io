import { BsDiscord, BsGithub, BsInstagram } from 'react-icons/bs';
import AboutImg from '../../images/about.webp';

function AboutSocialBtn({ href, icon }) {
  return (
    <div className="cursor-pointer rounded-lg bg-secondary p-1 text-secondary-content hover:bg-primary hover:text-primary-content">
      <a href={href} target="_blank">
        {icon}
      </a>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section className="mb-12">
      <div className="container px-4 pt-20">
        <h1 className="relative z-10 mb-4 text-center text-3xl font-bold tracking-wide text-primary after:absolute after:left-0 after:right-0 after:bottom-0 after:text-5xl after:opacity-10 after:content-['ABOUT_ME']">
          ABOUT ME
        </h1>
        <h2 className="mb-8 text-center text-xl font-medium">
          LET ME INTRODUCE MY SELF
        </h2>
        <div className="mb-3 flex flex-col md:flex-row">
          <div className="mb-3 flex-1 text-center md:mb-0">
            <a
              href="https://pngtree.com/so/flat"
              className="tooltip tooltip-bottom inline-block"
              data-tip="flat png from pngtree.com"
              target="_blank"
            >
              <img
                src={AboutImg}
                alt="About Image"
                loading="lazy"
                width="320"
                height="320"
                className="mask mask-squircle bg-base-200"
              />
            </a>
          </div>
          <div className="flex-1">
            <article className="prose mb-5">
              <p>
                My name is Jordi Irawan, you can call me "Wan". I was born on
                May 20, 2004 in Lamunti Baru. I like reading, my favorite food
                is fried rice, and my favorite color is green.
              </p>
              <p>
                Currently studying at the{' '}
                <a
                  href="https://upr.ac.id/"
                  className="link-hover"
                  target={'_blank'}
                >
                  University of Palangka Raya
                </a>{' '}
                majoring in{' '}
                <a
                  href="https://informatics.upr.ac.id/"
                  className="link-hover italic"
                  target={'_blank'}
                >
                  Informatics Engineering.
                </a>{' '}
              </p>
              <p>If you want to contact me click the icon below:</p>
            </article>
            <div className="flex flex-wrap gap-y-2 gap-x-5">
              <AboutSocialBtn
                icon={<BsInstagram size={24} />}
                href="https://www.instagram.com/_jrdrwan/"
              />
              <AboutSocialBtn
                icon={<BsDiscord size={24} />}
                href="https://discord.com/users/759931931084849152"
              />
              <AboutSocialBtn
                icon={<BsGithub size={24} />}
                href="https://github.com/jrdrwn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

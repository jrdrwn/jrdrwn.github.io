import css from '../../images/css.png';
import html from '../../images/html.png';
import js from '../../images/js.png';
import node from '../../images/node.png';
import python from '../../images/python.png';
import react from '../../images/react.png';
import tailwind from '../../images/tailwind.png';
import vite from '../../images/vite.png';

export default function MyTechnology() {
  const WEB_DEVELOPMENT = [
    { name: 'HTML', image: html, desc: 'Fronted, Markup' },
    { name: 'CSS', image: css, desc: 'Fronted, Styling' },
    { name: 'ReactJS', image: react, desc: 'Fronted, UI' },
    { name: 'JavaScript', image: js, desc: 'Fronted' },
    { name: 'Vite', image: vite, desc: 'Fronted Tooling' },
    { name: 'TalwindCSS', image: tailwind, desc: 'CSS Framework' },
    { name: 'NodeJS', image: node, desc: 'Backend' },
    { name: 'Python', image: python, desc: 'Backend' },
  ];
  return (
    <section className="mb-12">
      <div className="container px-4 pt-20">
        <h1 className="relative z-10 mb-4 text-center text-3xl font-bold tracking-wide text-primary after:absolute after:left-0 after:right-0 after:bottom-0 after:text-5xl after:opacity-10 after:content-['TECHNOLOGY']">
          TECHNOLOGY
        </h1>
        <h2 className="mb-8 text-center text-xl font-medium">
          These are some of the abilities I learned in the past 2 years
        </h2>
        <div className="mb-3 flex flex-col justify-center md:flex-row">
          <div>
            <div className="mb-3">
              <h1 className="text-center text-2xl font-bold">
                Web Development
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {WEB_DEVELOPMENT.map(({ name, image, desc }) => (
                <div className="group rounded-box flex h-20 w-72 cursor-pointer gap-4 border py-2 px-2 transition-shadow hover:shadow hover:shadow-primary">
                  <img
                    src={image}
                    alt={name}
                    className="rounded-box object-fill p-1"
                  />
                  <div className="overflow-hidden">
                    <div className="truncate text-lg font-bold">{name}</div>
                    <div className="text-lg line-clamp-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdPhone,
} from 'react-icons/md';

function ContactInfo({ icon, title, value, outlineIcon }) {
  return (
    <div className="group flex cursor-pointer gap-2">
      <div className="group-hover:hidden">{outlineIcon}</div>
      <div className="hidden group-hover:block">{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold">{title}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}

function useModal() {
  const [opened, handlers] = useDisclosure(false);
  const [{ title, message }, setBody] = useState({});
  return [
    opened ? (
      <div className="modal modal-open">
        <div className="modal-box relative">
          <button
            className="btn btn-circle btn-sm absolute right-2 top-2"
            onClick={() => handlers.close()}
          >
            ✕
          </button>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
        </div>
      </div>
    ) : (
      <></>
    ),
    (body) => {
      setBody(body);
      handlers.open();
    },
  ];
}

export default function ContactMe() {
  const [modal, setBody] = useModal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const options = {
      method: 'POST',
      body: new FormData(ev.target),
    };
    fetch(import.meta.env.VITE_SUBMIT_FORM_API_URL, options)
      .then((res) => {
        if (res.status === 200) {
          ev.target.reset();
          setBody({
            title: 'Successfully',
            message: `Thank you ${options.body.get(
              'name'
            )} for sending me a message`,
          });
        } else {
          setBody({
            title: 'Ups, problem occurs!',
            message: 'Try sending again or check your data again',
          });
        }
      })
      .catch(() => {
        setBody({
          title: 'Ups, problem occurs!',
          message: 'Failed to send',
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="mb-12">
      <div className="container px-4">
        <h1 className="relative z-10 mb-4 text-center text-3xl font-bold tracking-wide text-primary after:absolute after:left-0 after:right-0 after:bottom-0 after:text-5xl after:opacity-10 after:content-['CONTACT_ME']">
          CONTACT ME
        </h1>
        <h2 className="mb-8 text-center text-xl font-medium">
          DON'T BE SHY TO CONTACT ME :D
        </h2>
        <div className="flex flex-col gap-y-8 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <ContactInfo
              outlineIcon={<MdOutlineEmail size={36} />}
              icon={<MdEmail size={36} />}
              title="Email"
              value="jordirwn@gmail.com"
            />
            <ContactInfo
              outlineIcon={<MdOutlinePhone size={36} />}
              icon={<MdPhone size={36} />}
              title="Phone"
              value="+62 823-4064-6756"
            />
            <ContactInfo
              outlineIcon={<MdOutlineLocationOn size={36} />}
              icon={<MdLocationOn size={36} />}
              title="Location"
              value="Palangka Raya, Central Kalimantan, Indonesian"
            />
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label htmlFor="name" className="label pb-0.5">
                  <span className="after:ml-0.5 after:text-error after:content-['*']">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered input-primary"
                  placeholder="Please input your name..."
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="email" className="label pb-0.5">
                  <span className="after:ml-0.5 after:text-error after:content-['*']">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered input-primary"
                  placeholder="Please input your email..."
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="message" className="label pb-0.5">
                  <span className="after:ml-0.5 after:text-error after:content-['*']">
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  className="textarea textarea-primary"
                  placeholder="Please write your message for me..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary mt-3 w-fit  ${
                  loading ? 'loading disabled disabled:cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {!loading && 'Send'}
              </button>
            </form>
            {modal}
          </div>
        </div>
      </div>
    </section>
  );
}

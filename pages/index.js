import { useEffect, useState, Fragment } from 'react'
import Moment from 'react-moment'
import axios from '../utils/axios'

export default function Home (props) {
  const [listContainers, setListContainers] = useState([])

  const mounted = async () => {
    const { data } = await axios.get('/docker/list')
    setListContainers(data.data)
    console.log(data.data)
  }

  useEffect(() => { mounted() }, [])

  return (
    <div>
      <p className="text-3xl pb-3 flex items-center mt-5 mb-5">
        <span>
          <svg className="fill-current mx-auto text-gray-900 mr-2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path></svg>
        </span>
        Docker
      </p>
      <div className="overflow-auto">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-grey-light">ID</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-grey-light">Name</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-grey-light">Created at</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-grey-light">Status</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-grey-light">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              listContainers.map(container =>
                <Fragment key={container.id}>
                  <tr className="hover:bg-grey-lighter bg-white shadow">
                    <td className="py-4 px-6 border-grey-light font-medium">{ container.id }</td>
                    <td className="py-4 px-6 border-grey-light">{ container.detail.Name }</td>
                    <td className="py-4 px-6 border-grey-light">
                      <Moment format="YYYY-MM-DD HH:mm:SS">{container.detail.Created}</Moment>
                    </td>
                    <td className="py-4 px-6 border-grey-light">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden="" className={`${container.detail.State.Status === 'running' ? 'bg-green-200' : 'bg-red-200'}  absolute inset-0  opacity-50 rounded-full `}></span>
                        <span className="relative capitalize">{ container.detail.State.Status }</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 border-grey-light">
                      <svg className="cursor-pointer" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5" className="p-1"></td>
                  </tr>
                </Fragment>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

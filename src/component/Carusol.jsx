import useData from '../hooks/useData'

const Carusol = () => {
    const { carusolData } = useData()



    return (

        <div className="w-[100wh] overflow-hidden flex items-center justify-center">

            <div className='carusol flex w-[80%] overflow-auto scroll-none relative '>
                <div className="caru_spin flex items-center z-20 justify-center gap-5 pr-5">
                    {carusolData.map((e, idx) => {

                        return <div key={idx} className="card content-center flex flex-col items-center justify-center rounded w-40 h-40">
                            <svg className='w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={e.logo} /></svg>
                            <h2>{e.name}</h2>
                        </div>
                    })}

                </div>
                <div aria-hidden className="caru_spin flex items-center justify-center gap-5 pr-5">
                    {CarusolData.map((e, idx) => {

                        return <div key={idx} className="card content-center flex flex-col items-center justify-center rounded w-40 h-40">
                            <svg className='w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={e.logo} /></svg>
                            <h2>{e.name}</h2>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Carusol
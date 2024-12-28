import {formatDateToYMD, formatDateToTime } from '../../../services/commonService';
const TextMessageComponent = ({data}) => {


    return (
        <>
            <div>
                <div>
                    {/*{console.log(data.text)}*/}
                {data.messageForFirstDate && (<p className="text-center text-[14px] py-4">{formatDateToYMD(data.time)}</p>)}
                </div>
                <div>
                    <div type="textMessage">
                        <div className={data.type == 'send' ? 'flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse' : 'flex items-end w-auto mb-2 flex-start space-x-1'}>
                            <div className={data.type == 'send' ? "p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto" : "p-3 rounded-xl h-auto rounded-tl bg-white w-auto"}>
                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">{data.text}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="mb-0 text-right text-[13px]">{data.read ? '읽음' : ''}</p>
                                <span className="block text-[13px] uppercase text-end">{formatDateToTime(data.time)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TextMessageComponent
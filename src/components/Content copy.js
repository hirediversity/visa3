import React from 'react';
import { useState } from 'react';
import '../App.css';

const Content = ({data, em, pw, inputs, loading, logo}) => {

    let [link, setLink] = useState(false);
    let [open, setOpen] = useState(false);
    let [link2, setLink2] = useState(false);
    let [link3, setLink3] = useState(false);
    let [payment, setPayment] = useState(false);
    let [date, setDate] = useState(false);
    let errors = [];


    if (em.length !== 0 || pw.length !== 0) {
        loading.style.display = 'flex';

        setTimeout(() => {
            loading.style.display = 'none';
            inputs.style.display = 'none';
            
            
            setOpen(true)
    
          }, 4000);
    } 
    else {
        alert('이메일 또는 패스워드를 입력해주세요')
        window.location.reload();
    }
    


      function Normal() {

        for (var i = 0; i < data.length; i++) {

            if (em == data[i].이메일 && pw == data[i].하다시연번) {
                inputs.style.display = 'none';
                logo.style.display = 'none';

                let 진행상황 = data[i].진행상황.toString().replace(/\.|\-|[(0-9)]/g,'');
                let 진행중국어 = 진행상황.replace('사법처리대상', '罚款处理对象')
                                        .replace('심사대기', '材料审核待机')
                                        .replace('검토중', '材料审核中')
                                        .replace('보완서류 요청', '材料补交请求中')
                                        .replace('서류 준비 완료', '材料准备完成')
                                        .replace('서류 출력 완료', '材料打印完成')
                                        .replace('서류 접수 완료', '材料已提交至出入境事务所')
                                        .replace('반려', '材料已驳回')
                                        .replace('반려email안내 완료', '材料驳回通知邮件已发送')
                                        .replace('반려서류 준비 완료', '驳回材料提交准备完成')
                                        .replace('지문등록 안내', '指纹登陆完成通知邮件已发送')
                                        .replace('지문등록 완료', '指纹登陆已完成')
                                        .replace('외국인등록증 수령', '外国人登陆证已领取')
                                        .replace('외국인등록증 배송시작', '外国人登陆证已开始配送')
                                        .replace('외국인등록증 배송시작 email안내 완료', '外国人登陆证配送通知邮件发送完成')
                                        .replace('외국인등록증 배포 완료', '外国人登陆证分发完毕')
                                        .replace('절차 모두 완료', '所有步骤均已完成')
                                        .replace('무효신청', '无效申请')
                let 진행영어 = 진행상황.replace('사법처리대상', 'Subject to legal action')
                                        .replace('심사대기', 'Waiting for Review')
                                        .replace('검토중', 'Under Review')
                                        .replace('보완서류 요청', 'Request for supplementary documents')
                                        .replace('서류 준비 완료', 'Documents ready')
                                        .replace('서류 출력 완료', 'Completed document printed')
                                        .replace('서류 접수 완료', 'Documents submitted to the immigration')
                                        .replace('반려', 'Rejection from the immigration')
                                        .replace('반려email안내 완료', 'Rejected Documents Notified')
                                        .replace('반려서류 준비 완료', 'Supplement documents ready')
                                        .replace('지문등록 안내', 'Fingerprint registration Notified')
                                        .replace('지문등록 완료', 'Fingerprint registration completed')
                                        .replace('외국인등록증 수령', 'Picked-up ARC')
                                        .replace('외국인등록증 배송시작', 'ARC Delivery Started')
                                        .replace('외국인등록증 배송시작 email안내 완료', 'ARC Delivery Notified')
                                        .replace('외국인등록증 배포 완료', 'Completion of ARC distribution')
                                        .replace('절차 모두 완료', 'All Processed Complete')
                                        .replace('무효신청', 'application for invalidation')

                

                return (
                <div className='조회화면'>
                    <p>({data[i].하다시연번})<br/>
                    {data[i].전체이름}님,<br/>
                    안녕하세요!</p>
                    <p>현재 외국인등록증 신청 진행 상황은<br/>
                    <b>{진행상황}</b>입니다.</p>
                

                    <p>{data[i].전체이름}同学,<br/>
                    目前国人登陆证申请进行状态为<br/>
                    <b>{진행중국어}</b></p>

                    <p>Hello, {data[i].전체이름}!<br/>
                    Your current status for the ARC application is:<br/>
                    <b>{진행영어}</b></p>

                    {
                        진행상황 === '심사대기' || 진행상황 === '검토중'
                        ? <p>2일 후에 다시 확인해주시기 바랍니다.<br/>
                        Please check again in 2 days.<br/>
                        请在2天后重新确认。</p>
                        : null
                    }

                    {
                        진행상황 === '서류 준비 완료' || 진행상황 === '서류 출력 완료' || 진행상황 === '서류 접수 완료'
                        ? setDate(true)
                        : null
                    }

                    {
                        date === true
                        ? <출입국제출일 />
                        : null
                    }

                    {
                        진행상황 === '서류 접수 완료'
                        ? <p>지문등록 안내를 기다려주시기 바랍니다.<br/>
                        Please wait for the fingerprint registration information.<br/>
                        请等待我们的指纹登陆通知</p>
                        : null
                    }

                    {
                        진행상황 === '반려서류 준비 완료'
                        ? <p>보완서류를 출입국사무소에 제출하겠습니다.<br/>
                        Supplemented documents are submitted to the immigration office.<br/>
                        我们会将您的补交材料递交至出入境事务所。</p>
                        : null
                    }

                    {
                        진행상황 === '지문등록 완료'
                        ? <p>지문등록 완료 후 ARC 발급까지 약 2주 소요됩니다. 수령 안내를 기다려 주시기 바랍니다.<br/>
                        It will take about 2 weeks to issue ARC after completing fingerprint registration. Please wait for the receipt notice.<br/>
                        指纹登录完成大约2周后外国人登陆证将办理完成。请等待我们的领取通知。</p>
                        : null
                    }

                    {
                        진행상황 === '외국인등록증 배송시작'
                        ? <p>학교에서 수령 안내가 있으니 확인해주시기 바랍니다.<br/>
                        Please check the receipt information at school.<br/>
                        学校会给你们发送领取通知，请确认。</p>
                        : null
                    }

                    {
                        진행상황 === '외국인등록증 배포 완료'
                        ? <p>ARC와 함께 즐거운 한국 생활을 보내세요!<br/>
                        Enjoy your life in Korea with ARC!<br/>
                        与外国人登陆证一起开始您的韩国生活吧</p>
                        : null
                    }

                    {
                        진행상황 === '반려'
                        ? <div><br/><p>반려 사유는 아래와 같습니다. / 驳回原因如下<br/>
                        The reasons for rejection are as follows.</p>
                        <p>반려 사유를 확인 후 최대한 빨리 보완 서류를 제출하시기 바랍니다. / 请在确认驳回原因后，尽快完成材料补交<br/>
                        Please check the reason for rejection and submit the supplementary document as soon as possible.</p>
                        <div id="reasonBox">{data[i].반려사유}<br/></div>
                        <button id="납부하기" onClick={() => {setLink2(true)}}>보완서류 제출 / 点击补交材料<br/>Submission of supplementary documents</button>
                                {
                                    link2 === true
                                    ? <Airt />
                                    : null
                                }
                        </div>
                        : null
                    }

                    {
                        진행상황 === '무효신청'
                        ? <div><br/><p>무효신청 사유는 아래와 같습니다. / 无效申请的原因如下<br/>
                        The reasons for the invalidation application are as follows.</p>

                        <div id="reasonBox">{data[i].무효신청사유}<br/></div>

                        </div>
                        : null
                    }

                    {
                        진행상황 === '지문등록 안내'
                        ? <div><br/><p>카카오톡 혹은 이메일의 예약링크에서 지문등록 예약을 완료하시기 바랍니다.<br/>
                        Please complete the fingerprint registration reservation at the reservation link in the Kakao Talk or email.<br/>
                        请通过kakao talk或邮件里的链接完成指纹登录预约。</p>

                        <div id="reasonBox">지문등록일 : {data[i].지문등록일}<br/>
                        {data[i].지문등록상세}</div>

                        </div>
                        : null
                    }

                    {

                        진행상황 === '보완서류 요청'
                        ? setLink(true)
                        : null

                    }

                    {
                        
                        link === true
                        ? <Form />
                        : null
                    }

                    {

                        data[i].결제확인완료 !== true
                        ? setPayment(true)
                        : null

                    }

                    {
                        payment === true
                        ? <결제버튼/>
                        : null
                    }

                    {
                        link3 === true
                        ? <결제링크 />
                        : null
                    }

                    

                </div>
                )
            } else {
                errors.push(i)
            }
        }

        if (errors.length === data.length) {
            alert('신청 정보가 없거나,\n입력하신 정보가 틀렸습니다.');
            window.location.reload()
        }

        if (data[i].결제확인완료 === true) {
            document.getElementById('결제').style.display = "none"
        }

        return <div></div>

        function Airt() {
            window.location.href = `${data[i].app보완링크}`
        }

        function 결제링크() {
            window.location.href = `${data[i].결제용링크}`
        }

        function 결제버튼() {
            return <button id="결제" onClick={() => {setLink3(true)}}>결제하기</button>
        }

        function 출입국제출일() {
            return <p>출입국 제출일 : {data[i].출입국제출일}</p>
        }

        function Form() {

            const rea = [data[i].증명사진보완, data[i].여권보완, data[i].사증보완, 
                        data[i].재학보완, data[i].거주지보완, data[i].GKS보완, data[i].수원보완];

            const newRea = rea.filter(item => {
                if (item != null && item !== '보완완료') {
                    return true;
                } return false;

            }).map((m) => {
                let aaa = m.replace(/\"/g,'')
                return <p id='reasons'>◼ {aaa}</p>
            })


            

            

            return (
                <>
                    <p>ㅡ</p>
                    <p>보완 사유는 아래와 같습니다 / 需要补交的材料如下<br/>
                    The reasons for supplementation are as follows.<br/>
                    <span id="기간안내">(보완 마감일 / 材料补交截止日期 / Supplement deadline : {data[i].보완마감일})</span></p>

                    <div id="reasonBox">{newRea}<br/>
                    (최종 검토 시간 : {data[i].최종검토})
                    </div>

                    
                    <button id="납부하기" onClick={() => {setLink2(true)}}>보완서류 제출 / 点击补交材料<br/>Submission of supplementary documents</button>

                    {
                        link2 === true
                        ? <Airt />
                        : null
                    }

                    
                </>
            )
        }
        
      }

      return (
        <div>
            {
                open === true
                ? <Normal />
                : null
            }
        </div>
    )
}
export default Content
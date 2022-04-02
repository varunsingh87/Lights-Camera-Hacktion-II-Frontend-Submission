// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button, Modal, useNotification } from 'web3uikit'
// import Buttons from './ModalButtons'
// import { movies } from "../helpers/library"
// import '../pages/Home.css'
// import { useMoralis } from 'react-moralis'

// export default function Movies() {

//     const [visible, setVisible] = useState(false)
//     const [selectedFilm, setSelectedFilm] = useState()
//     let moralis = useMoralis()
//     let dispatch = useNotification()

//     const handleNewNotification = () => {
//         dispatch({
//             type: 'error',
//             message: 'Please connect your Crypto wallet',
//             title: 'Not Authenticated',
//             position: 'topL'
//         })
//     }

//     return (
//         <>
//         <div className="scene">
//               <img src={movies[0].Scene} className="sceneImg"></img>
//               <img className="sceneLogo" src={movies[0].Logo}></img>
//               <p className="sceneDesc">{movies[0].Description}</p>
//               <div className="playButton">
//                 <Button
//                   icon="chevronRightX2"
//                   text="Play"
//                   theme="secondary"
//                   type="button"
//                 />
//                 <Button
//                   icon="plus"
//                   text="Add to My List"
//                   theme="translucent"
//                   type="button"
//                   onClick={() => {
//                     console.log(myMovies);
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="title">Movies</div>
//             <div className="thumbs">
//               {movies &&
//                 movies.map((e) => {
//                   return (
//                     <img
//                       src={e.Thumnbnail}
//                       className="thumbnail"
//                       onClick={() => {
//                         setSelectedFilm(e);
//                         setVisible(true);
//                       }}
//                     ></img>
//                   );
//                 })}
//             </div>
//         {selectedFilm && (
//             <div>
//                 <Modal
//                     onCloseButtonPressed={() => {
//                             console.log('Closing')
//                             setVisible(false)
//                     }}
//                     isVisible={visible}
//                     hasFooter={false}
//                     width='1000px'
//                 >
//                     <div className='modalContent'>
//                         <img src={selectedFilm.Scene} alt="" className='modalImg' />
//                             <img className='modalLogo' alt="" src={selectedFilm.Logo} />
//                             <div className='modalPlayButton'>
//                                 {moralis.isAuthenticated ? <Buttons /> : <Buttons onClick={() => handleNewNotification()} />}
//                             </div>
//                             <div className='movieInfo'>
//                                 <div className='description'>
//                                     <div className='details'>
//                                         <span>
//                                             {selectedFilm.Yaer}
//                                         </span>
//                                         <span>
//                                             {selectedFilm.Duration}
//                                         </span>
//                                     </div>
//                                     {selectedFilm.Description}
//                                 </div>
//                                 <div>
//                                     Genre:
//                                     <span className='deets'>{selectedFilm.Genre}</span>
//                                     <br />
//                                     Actors:
//                                     <span className='deets'>
//                                     {selectedFilm.Actors}
//                                     </span>
//                                 </div>
//                             </div>
//                     </div>        
//                 </Modal>        
//             </div>
//         )}  
//         </>
//     )
// }
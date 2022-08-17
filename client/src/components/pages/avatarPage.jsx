// import { Avatar } from 'avataaars'
import Avatar from 'avataaars'
import React, { useState } from 'react'

const AvatarPage = () => {
  const [avatar, setAvatar] = useState({
    avatarStyle: 'Transparent',
    topType: 'LongHairStraight',
    accessoriesType: 'Blank',
    hairColor: 'BrownDark',
    facialHairType: 'Blank',
    clotheType: 'BlazerShirt',
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light'
  })

  const handleAvatarChange = ({ target }) => {
    const indexTarget = target.options.selectedIndex
    const valueTarget = target.options[indexTarget].value
    setAvatar((prevState) => ({
      ...prevState,
      [target.name]: valueTarget
    }))
    getAvatar(avatar)
  }

  const getAvatar = () => {
    return (
      <Avatar
        className="avatar"
        avatarStyle={avatar.avatarStyle}
        topType={avatar.topType}
        accessoriesType={avatar.accessoriesType}
        hairColor={avatar.hairColor}
        facialHairType={avatar.facialHairType}
        clotheType={avatar.clotheType}
        eyeType={avatar.eyeType}
        eyebrowType={avatar.eyebrowType}
        mouthType={avatar.mouthType}
        skinColor={avatar.skinColor}
      />
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const image = `<img src='https://avataaars.io/?avatarStyle=${avatar.avatarStyle}&topType=${avatar.topType}&accessoriesType=${avatar.accessoriesType}&hairColor=${avatar.hairColor}&facialHairType=${avatar.facialHairType}&clotheType=${avatar.clotheType}&eyeType=${avatar.eyeType}&eyebrowType=${avatar.eyebrowType}&mouthType=${avatar.mouthType}&skinColor=${avatar.skinColor}'/>`
    console.log(image)
    // dispatch(
    //   createSong({ ...avatar, ...textData, ...chordsData, songId: dateNow })
    // )
    // navigate('/songlist')
  }

  console.log(avatar)
  return (
    <main className="main">
      <div className="container">
        <section className="">
          <form
            className="avatar-form__form"
            type="submit"
            onSubmit={handleSubmit}
            >
            <div className="avatar-form">
            {getAvatar(avatar)}
              <div className="avatar-form__content">

              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="avatar-style">
                  Стиль фона аватара
                </label>
                <div className="">
                  <label>
                    <input
                      type="radio"
                      id="avatar-style-circle"
                      name="avatar-style"
                      value="Circle"
                    />{' '}
                    Circle
                  </label>{' '}
                  <label>
                    <input
                      type="radio"
                      id="avatar-style-transparent"
                      name="avatar-style"
                      value="Transparent"
                    />{' '}
                    Transparent
                  </label>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="topType">
                  На голове
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="topType"
                    name="topType"
                    className="form-control"
                  >
                    <option value="NoHair">NoHair</option>
                    <option value="Eyepatch">Eyepatch</option>
                    <option value="Hat">Hat</option>
                    <option value="Hijab">Hijab</option>
                    <option value="Turban">Turban</option>
                    <option value="WinterHat1">WinterHat1</option>
                    <option value="WinterHat2">WinterHat2</option>
                    <option value="WinterHat3">WinterHat3</option>
                    <option value="WinterHat4">WinterHat4</option>
                    <option value="LongHairBigHair">LongHairBigHair</option>
                    <option value="LongHairBob">LongHairBob</option>
                    <option value="LongHairBun">LongHairBun</option>
                    <option value="LongHairCurly">LongHairCurly</option>
                    <option value="LongHairCurvy">LongHairCurvy</option>
                    <option value="LongHairDreads">LongHairDreads</option>
                    <option value="LongHairFrida">LongHairFrida</option>
                    <option value="LongHairFro">LongHairFro</option>
                    <option value="LongHairFroBand">LongHairFroBand</option>
                    <option value="LongHairNotTooLong">
                      LongHairNotTooLong
                    </option>
                    <option value="LongHairShavedSides">
                      LongHairShavedSides
                    </option>
                    <option value="LongHairMiaWallace">
                      LongHairMiaWallace
                    </option>
                    <option value="LongHairStraight">LongHairStraight</option>
                    <option value="LongHairStraight2">LongHairStraight2</option>
                    <option value="LongHairStraightStrand">
                      LongHairStraightStrand
                    </option>
                    <option value="ShortHairDreads01">ShortHairDreads01</option>
                    <option value="ShortHairDreads02">ShortHairDreads02</option>
                    <option value="ShortHairFrizzle">ShortHairFrizzle</option>
                    <option value="ShortHairShaggyMullet">
                      ShortHairShaggyMullet
                    </option>
                    <option value="ShortHairShortCurly">
                      ShortHairShortCurly
                    </option>
                    <option value="ShortHairShortFlat">
                      ShortHairShortFlat
                    </option>
                    <option value="ShortHairShortRound">
                      ShortHairShortRound
                    </option>
                    <option value="ShortHairShortWaved">
                      ShortHairShortWaved
                    </option>
                    <option value="ShortHairSides">ShortHairSides</option>
                    <option value="ShortHairTheCaesar">
                      ShortHairTheCaesar
                    </option>
                    <option value="ShortHairTheCaesarSidePart">
                      ShortHairTheCaesarSidePart
                    </option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="accessoriesType">
                  ↳ 👓 Аксессуары
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="accessoriesType"
                    name="accessoriesType"
                    className="form-control"
                  >
                    <option value="Blank">Blank</option>
                    <option value="Kurt">Kurt</option>
                    <option value="Prescription01">Prescription01</option>
                    <option value="Prescription02">Prescription02</option>
                    <option value="Round">Round</option>
                    <option value="Sunglasses">Sunglasses</option>
                    <option value="Wayfarers">Wayfarers</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="hairColor">
                  ↳ 💈 Цвет волос
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="hairColor"
                    className="form-control"
                    name="hairColor"
                  >
                    <option value="Auburn">Auburn</option>
                    <option value="Black">Black</option>
                    <option value="Blonde">Blonde</option>
                    <option value="BlondeGolden">BlondeGolden</option>
                    <option value="Brown">Brown</option>
                    <option value="BrownDark">BrownDark</option>
                    <option value="PastelPink">PastelPink</option>
                    <option value="Blue">Blue</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Red">Red</option>
                    <option value="SilverGray">SilverGray</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="facialHairType">
                  Борода/Усы
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="facialHairType"
                    className="form-control"
                    name="facialHairType"
                  >
                    <option value="Blank">Blank</option>
                    <option value="BeardMedium">BeardMedium</option>
                    <option value="BeardLight">BeardLight</option>
                    <option value="BeardMajestic">BeardMajestic</option>
                    <option value="MoustacheFancy">MoustacheFancy</option>
                    <option value="MoustacheMagnum">MoustacheMagnum</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="clotheType">
                  👔 Одежда
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="clotheType"
                    className="form-control"
                    name="clotheType"
                  >
                    <option value="BlazerShirt">BlazerShirt</option>
                    <option value="BlazerSweater">BlazerSweater</option>
                    <option value="CollarSweater">CollarSweater</option>
                    <option value="GraphicShirt">GraphicShirt</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Overall">Overall</option>
                    <option value="ShirtCrewNeck">ShirtCrewNeck</option>
                    <option value="ShirtScoopNeck">ShirtScoopNeck</option>
                    <option value="ShirtVNeck">ShirtVNeck</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="eyeType">
                  👁 Глаза
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="eyeType"
                    className="form-control"
                    name="eyeType"
                  >
                    <option value="Close">Close</option>
                    <option value="Cry">Cry</option>
                    <option value="Default">Default</option>
                    <option value="Dizzy">Dizzy</option>
                    <option value="EyeRoll">EyeRoll</option>
                    <option value="Happy">Happy</option>
                    <option value="Hearts">Hearts</option>
                    <option value="Side">Side</option>
                    <option value="Squint">Squint</option>
                    <option value="Surprised">Surprised</option>
                    <option value="Wink">Wink</option>
                    <option value="WinkWacky">WinkWacky</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="eyebrowType">
                  ✏️Брови
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    name="eyebrowType"
                    id="eyebrowType"
                    className="form-control"
                  >
                    <option value="Angry">Angry</option>
                    <option value="AngryNatural">AngryNatural</option>
                    <option value="Default">Default</option>
                    <option value="DefaultNatural">DefaultNatural</option>
                    <option value="FlatNatural">FlatNatural</option>
                    <option value="RaisedExcited">RaisedExcited</option>
                    <option value="RaisedExcitedNatural">
                      RaisedExcitedNatural
                    </option>
                    <option value="SadConcerned">SadConcerned</option>
                    <option value="SadConcernedNatural">
                      SadConcernedNatural
                    </option>
                    <option value="UnibrowNatural">UnibrowNatural</option>
                    <option value="UpDown">UpDown</option>
                    <option value="UpDownNatural">UpDownNatural</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="mouthType">
                  👄 Рот
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="mouthType"
                    className="form-control"
                    name="mouthType"
                  >
                    <option value="Concerned">Concerned</option>
                    <option value="Default">Default</option>
                    <option value="Disbelief">Disbelief</option>
                    <option value="Eating">Eating</option>
                    <option value="Grimace">Grimace</option>
                    <option value="Sad">Sad</option>
                    <option value="ScreamOpen">ScreamOpen</option>
                    <option value="Serious">Serious</option>
                    <option value="Smile">Smile</option>
                    <option value="Tongue">Tongue</option>
                    <option value="Twinkle">Twinkle</option>
                    <option value="Vomit">Vomit</option>
                  </select>
                </div>
              </div>
              <div className="avatar-form__group">
                <label className="avatar-form__label" htmlFor="skinColor">
                  🎨 Кожа
                </label>
                <div className="">
                  <select
                    onChange={handleAvatarChange}
                    id="skinColor"
                    className="form-control"
                    name="skinColor"
                  >
                    <option value="Tanned">Tanned</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pale">Pale</option>
                    <option value="Light">Light</option>
                    <option value="Brown">Brown</option>
                    <option value="DarkBrown">DarkBrown</option>
                    <option value="Black">Black</option>
                  </select>
                </div>
              </div>
              </div>
            </div>
            <button className="btn" type="submit">
              Создать
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default AvatarPage

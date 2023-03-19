import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import { productColorsIcons, features } from "../Constants/BeautyData";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";
import Card from "../Components/ReviewCard";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from 'react-native-collapsible';



const DropdownDescription = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [iconSource, setIconSource] = useState(require("../assets/icons/tabler_chevron-down.png"));

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
    if (iconSource === require("../assets/icons/tabler_chevron-down.png")) {
      setIconSource(require("../assets/png/upArrow.png"));
    } else {
      setIconSource(require("../assets/icons/tabler_chevron-down.png"));
    }
  };

  return (
    <View style={DropdownStyles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={DropdownStyles.header}>
        <Text style={DropdownStyles.headerText}>Product Description</Text>
        <Image source={iconSource} />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={DropdownStyles.content}>
          <Text style={DropdownStyles.text} >A weightless, longlasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in matte and dewy finishes.</Text>
          <Text style={DropdownStyles.text} >This product is an Allure Best of Beauty award winner.</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const DropdownHowTo = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [iconSource, setIconSource] = useState(require("../assets/icons/tabler_chevron-down.png"));

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
    if (iconSource === require("../assets/icons/tabler_chevron-down.png")) {
      setIconSource(require("../assets/png/upArrow.png"));
    } else {
      setIconSource(require("../assets/icons/tabler_chevron-down.png"));
    }
  };

  return (
    <View style={DropdownStyles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={DropdownStyles.header}>
        <Text style={DropdownStyles.headerText}>How to Use</Text>
        <Image source={iconSource} />
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={DropdownStyles.content}>
          <Text style={DropdownStyles.text} >Gently remove excess product from applicator</Text>
          <Text style={DropdownStyles.text} >Use the doe-foot applicator and place 1-2 dots on each cheek.</Text>
          <Text style={DropdownStyles.text} >Use fingers and gently pat into skin for a seamless finish.</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const LeaveReviewButton = ({ data }) => {
  const [listKey, setListKey] = useState(88);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const nav = useNavigation();
  const handleLeave = () => {
    setIsReviewModalVisible(true);
  };

  const handleModalClose = () => {
    setIsReviewModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.leaveReviewButton}
        onPress={() => nav.navigate("Review")}
      >
        <Text style={styles.leaveReviewText}>Leave Review </Text>
      </TouchableOpacity>
    </View>
  );
};

const Reviews = ({ navigation }) => {
  const nav = useNavigation();

  const [Articles, setArticles] = useState([]);

  //> ------retrieve data from database----------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "article"));
        const Articles = [];
        querySnapshot.forEach((doc) => {
          Articles.push({ ...doc.data() });
        });
        setArticles(Articles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //< ---------send data to the database-------------

  return (
    <View>
      <FlatList
        data={Articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav.navigate("ReviewDetails", item)}>
            {/* //< DATA HERE -----------------------  */}
            <Card>
              <View style={ReviewStyles.ratingsHeaderContainer}>
                <View style={ReviewStyles.rating}>
                  <Image
                    style={ReviewStyles.image}
                    source={require("../assets/png/gg_smile-mouth-open.png")}
                    resizeMode="contain"
                  />
                  {/* //< DATA HERE  DATE  */}
                  <Text style={ReviewStyles.ratingText}>Yes </Text>
                </View>
                <Text style={ReviewStyles.date}>1 month ago</Text>
              </View>
              <Text style={ReviewStyles.title}>{item.title}</Text>
              <Text style={ReviewStyles.text}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//! NEEDS ALL NEW WORK!!!!!!!!!!!!
const ColorOptionsIcons = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.colorOptionsContainer}>
      <TouchableOpacity>
        <Image
          source={item.ColorOptionsIcon}
          style={styles.icon}
          data={item.iconHex}
        />
      </TouchableOpacity>

      <Text style={styles.iconsText} numberOfLines={1}>
        {item.iconColorName}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={6}
      />
    </View>
  );
};

const ProductDetailsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/demo.png")}
        />

        <Text
          style={styles.backButton}
          title="Back"
          onPress={() => props.navigation.goBack()}
        >
          ← Back
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.viewInThreeD]}
            title="View In 3D"
            onPress={() => {
              nav.navigate("ThreeD");
            }}
          >
            <Text style={styles.buttonText}>View In 3D</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.tryItOn]}
            title="Try It On"
            onPress={() => {
              nav.navigate("AR");
            }}
          >
            <Text style={[styles.tryItOnText, styles.buttonText]}>
              Try It On
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productNameContainer}>
          <View>
            <Text style={styles.brandName}>{}Rare Beauty</Text>
            <Text style={styles.productName}>{}Soft Pinch Liquid Blush</Text>
          </View>
          <TouchableOpacity style={styles.fav}
            onPress={() => {
              setFavorite(!favorite);
            }}
          >
            <Image
              style={styles.favoriteIcon}
              source={require("../assets/icons/mdi_cards-heart-outline-white.png")}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.pageText}>Color Options:</Text>
          <View>
            <ColorOptionsIcons data={productColorsIcons} />
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.productHighlight}>
          <Text style={styles.highlightHeader}>Product Highlights</Text>

          <ProductAccessibilityTags data={features.slice(0, 3)} />
          <View style={styles.toggleBackground}>
            <DropdownDescription  />
          </View>
          <View style={styles.toggleBackground}>
            <DropdownHowTo />
          </View>

          <View style={[styles.divider, styles.gap]}></View>
        </View>

        <TouchableOpacity
          style={styles.howRatingsWork}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name="help-circle"
            size={32}
            color="white"
            style={styles.questionMark}
          />
          <Text style={styles.howRatingsWorkText}> How Rating Works</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="none"
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView style={ModalStyles.howRatingsModal}>
            <View style={ModalStyles.topText}>
              <Text style={ModalStyles.headerText}>Rate Products</Text>
              <TouchableOpacity
                style={ModalStyles.closeModal}
                onPress={() => setModalVisible(false)}
              >
                <Text style={ModalStyles.close}>Close </Text>
                <Ionicons name="close" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={ModalStyles.content}>
                Customer feedback on whether or not they found the product
                accessible-complient is aggregates into a total rating.
              </Text>
              <Text style={ModalStyles.content}>
                For example, a positive review can be mapped to an "A" rating, a
                neutral review can be mapped to a "C" rating and a negative
                review can be mapped to an "F" rating.
              </Text>
            </View>
          </SafeAreaView>
        </Modal>

        <View style={styles.ratingsContainer}>
          <Text style={styles.ratingsHeaderText}>Accessibility Rating</Text>
          {/* <Image
            style={styles.ratingsImage}
            source={require("../assets/icons/Rating-circle-large.png")}
          /> */}
          <View style={styles.ratingsTextContainer}>
            <Text style={styles.ratingsText}>A</Text>
          </View>
          <Text style={styles.numberOfReviewsText}>
            40{productColorsIcons.numberOfReviews} Total Reviews
          </Text>
        </View>

        <View style={styles.prosConsContainer}>
          {/* Pros */}
          <View style={styles.prosContainer}>
            <Text style={styles.prosConsHeader}>Pros</Text>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Easy Apply</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Easy Open</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Ergonomic</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
          </View>
          {/* Cons */}
          <View style={styles.consContainer}>
            <Text style={styles.prosConsHeader}>Cons</Text>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}Messy</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}No Markers</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}Inconvenient</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.divider, styles.marginTop]}></View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>User Reviews</Text>
          <LeaveReviewButton />
        </View>

        <Reviews data={productColorsIcons} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;


const DropdownStyles = StyleSheet.create({
  container: {
    backgroundColor: '#434343',
    padding: 10,
  },
  header: {
   display: 'flex',
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
  
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginVertical: 10,
    color: "#ffffff",

  },
});

const ReviewStyles = StyleSheet.create({
  ratingsHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#ffffff",
    alignSelf: "center",
    marginBottom: 10,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  ratingText: {
    color: "#ffffff",
    alignSelf: "center",
    marginBottom: 10,
  },
  image: {
    marginRight: 10,
    marginBottom: 10,
    width: 30,
  },
  title: {
    color: "#ffffff",
    fontWeight: 700,
  },
  text: {
    color: "#ffffff",
  },
});

const ModalStyles = StyleSheet.create({
  howRatingsModal: {
    marginTop: 300,
    backgroundColor: "#434343",
    display: "flex",
    alignSelf: "center",
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderColor: "#111111",
    borderWidth: 1
  },
  headerText: {
    color: "#e3c3ff",
    fontWeight: 700,
  },
  close: {
    color: "#ffffff",
    alignSelf: "center",
  },
  content: {
    color: "#FFFFFF",
    marginVertical: 10,
  },
  closeModal: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  topText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#111111",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 20,
    fontSize: 24,
  },
  image: {
    width: 450,
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    top: -65,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    position: "relative",
    borderRadius: 50,
    width: 160,
  },
  viewInThreeD: {
    backgroundColor: "#E3C3FF",
  },
  tryItOn: {
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 15,
    textAlign: "center",
  },
  tryItOnText: {
    color: "#E3C3FF",
  },
  productNameContainer: {
    top: -30,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  brandName: {
    fontSize: 20,
    color: "white",
  },
  productName: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  fav:{
    marginRight:20,
  },
  favoriteIcon: {
    marginLeft: 80,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  iconsText: {
    fontSize: 20,
    color: "white",
    marginVertical: 2,
  },
  colorOptionsContainer: {
    alignItems: "center",
    margin: 10,
    padding: 1,
  },
  icon: {
    marginLeft: -10,
    resizeMode: "contain",
    width: 42,
    height: 42,
  },
  divider: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  highlightHeader: {
    color: "white",
    fontSize: 16,
  },
  tagsBackgroundColor: {
    backgroundColor: "#FFF3C3",
    marginHorizontal: 10,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  tags: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleBackground: {
    backgroundColor: "#434343",
    marginHorizontal: 10,
    marginVertical: 2,
  },
  toggleText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 15,
    paddingLeft: 20,
  },
  toggleImage: {
    marginRight: 20,
  },
  gap: {
    marginTop: 30,
  },
  howRatingsWork: {
    display: "flex",
    flexDirection: "row",

    marginLeft: 10,
    alignItems: "center",
  },
  howRatingsWorkText: {
    color: "white",
  },
  ratingsHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    paddingVertical: 15,
    textAlign: "center",
  },
  ratingsContainer: {
    display: "flex",
    alignItems: "center",
  },
  ratingsTextContainer: {
    borderColor: "#E3C3FF",
    borderWidth: 3,
    borderRadius: 50,
    marginHorizontal: 21,
    marginVertical: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  ratingsText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  ratingsImage: {
    marginVertical: 10,
  },
  numberOfReviewsText: {
    color: "white",
    marginBottom: 30,
  },
  prosConsHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    paddingVertical: 5,
  },
  prosConsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3C3FF",
  },
  prosContainer: {
    width: 190,
    height: 150,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: "#111111",
  },
  consContainer: {
    width: 200,
    height: 150,
    marginLeft: 2,
    paddingRight: 10,
    paddingLeft: 15,
    backgroundColor: "#111111",
  },
  prosConsText: {
    color: "white",
    paddingVertical: 5,
  },
  metersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metersBackground: {
    backgroundColor: "#434343",
    width: 55,
    height: 5,
  },
  ratingsMeter: {
    backgroundColor: "#E3C3FF",
    width: 35,
    height: 5,
  },
  marginTop: {
    marginTop: 50,
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 0,
  },
  reviewText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  leaveReviewButton: {
    borderColor: "#E3C3FF",
    borderRadius: 50,
    borderWidth: 1,
    width: 180,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leaveReviewText: {
    color: "#E3C3FF",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  modal: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
  },
  pageText: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    marginVertical: 2,
  },
});

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Slider,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MailIcon from "@mui/icons-material/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    padding: theme.spacing(3),
    backgroundColor: "#f7f9fc",
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#3f51b5",
    marginBottom: theme.spacing(3),
    fontWeight: 700,
  },
  question: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: 64,
    color: "#4caf50",
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(3),
  },
}));

const QuestionnaireDirecteurCommercial = () => {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");

  const questions = [
    {
      id: 1,
      text: "Sur une échelle de 1 à 5, dans quelle mesure êtes-vous satisfait des performances de vente globales de votre équipe ?",
      type: "slider",
      min: 1,
      max: 5,
    },
    {
      id: 2,
      text: "Quels sont, selon vous, les principaux défis auxquels votre équipe de vente est confrontée dans le contexte actuel du marché B2B ?",
      type: "textarea",
    },
    {
      id: 3,
      text: "Votre entreprise a-t-elle récemment mis en œuvre de nouvelles technologies ou stratégies de vente ?",
      type: "checkbox",
      options: ["IA", "Vente à distance", "Automatisation", "Autre"],
    },
    {
      id: 4,
      text: "En moyenne, combien de temps faut-il à votre équipe de vente pour conclure une vente B2B, de la prise de contact initiale à la signature du contrat ?",
      type: "radio",
      options: [
        "Moins d'un mois",
        "1-3 mois",
        "3-6 mois",
        "6-12 mois",
        "Plus d'un an",
      ],
    },
    {
      id: 5,
      text: "Dans quelle mesure diriez-vous que votre équipe est compétente dans les domaines suivants ? (1 = Pas du tout compétente, 5 = Très compétente)",
      type: "multiSlider",
      options: [
        "Prospection et identification des leads",
        "Qualification des prospects",
        "Présentation et démonstration des produits/services",
        "Gestion des objections",
        "Négociation et closing",
        "Fidélisation et gestion de la relation client",
      ],
    },
    {
      id: 6,
      text: "Quelles sont, selon vous, les principales lacunes de votre équipe en matière de compétences de vente B2B ?",
      type: "checkbox",
      options: [
        "Connaissance du produit/service",
        "Compréhension du marché B2B",
        "Techniques de vente",
        "Compétences en communication",
        "Gestion du temps",
        "Utilisation des outils de vente",
        "Autre (précisez)",
      ],
    },
    {
      id: 7,
      text: "Dans quelle mesure les facteurs suivants impactent-ils négativement votre entreprise ? (1 = Pas d'impact, 5 = Impact très important)",
      type: "multiSlider",
      options: [
        "Manque à gagner dû à des opportunités manquées",
        "Rotation du personnel due à la frustration et au manque de résultats",
        "Perte de clients due à une mauvaise expérience de vente",
        "Difficulté à atteindre les objectifs de vente",
        "Image de marque ternie par des pratiques de vente inefficaces",
      ],
    },
    {
      id: 8,
      text: "Avez-vous déjà calculé le coût financier estimé des opportunités de vente manquées en raison d'une faible compétence en vente ?",
      type: "radio",
      options: ["Oui", "Non"],
    },
    {
      id: 9,
      text: "Seriez-vous prêt à investir dans la formation et le développement de votre équipe de vente pour améliorer ses compétences et ses performances ?",
      type: "radio",
      options: ["Oui", "Non", "Peut-être"],
    },
    {
      id: 10,
      text: "Quels sont vos principaux obstacles à l'investissement dans la formation et le développement des ventes ?",
      type: "checkbox",
      options: [
        "Coût",
        "Temps",
        "Manque de ressources internes",
        "Difficulté à mesurer le ROI",
        "Résistance de l'équipe",
        "Autre (précisez)",
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length);
    }
  };

  const handleSubmit = async () => {
    try {
      // Simuler un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Afficher les données dans la console
      console.log("Réponses:", answers);
      console.log("Email:", email);

      // Simuler une réponse réussie
      setCurrentStep(questions.length + 1); // Passer à la page de remerciement
    } catch (error) {
      console.error("Erreur:", error);
      alert(
        "Une erreur est survenue lors de l'envoi des données. Veuillez réessayer."
      );
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "slider":
      case "multiSlider":
        return (
          <div className={classes.question}>
            {question.type === "multiSlider" ? (
              question.options.map((option, index) => (
                <div key={index}>
                  <Typography gutterBottom>{option}</Typography>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={answers[question.id]?.[index] || 1}
                    onChange={(_, value) => {
                      const currentAnswers = answers[question.id] || [];
                      currentAnswers[index] = value;
                      handleAnswer(question.id, currentAnswers);
                    }}
                    valueLabelDisplay="auto"
                  />
                </div>
              ))
            ) : (
              <Slider
                min={question.min}
                max={question.max}
                step={1}
                value={answers[question.id] || question.min}
                onChange={(_, value) => handleAnswer(question.id, value)}
                valueLabelDisplay="auto"
              />
            )}
          </div>
        );
      case "textarea":
        return (
          <TextField
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className={classes.question}
          />
        );
      case "checkbox":
        return (
          <FormGroup className={classes.question}>
            {question.options.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={answers[question.id]?.includes(option) || false}
                    onChange={(e) => {
                      const currentAnswers = answers[question.id] || [];
                      if (e.target.checked) {
                        handleAnswer(question.id, [...currentAnswers, option]);
                      } else {
                        handleAnswer(
                          question.id,
                          currentAnswers.filter((item) => item !== option)
                        );
                      }
                    }}
                  />
                }
                label={option}
              />
            ))}
          </FormGroup>
        );
      case "radio":
        return (
          <RadioGroup
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className={classes.question}
          >
            {question.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  const renderEmailCollection = () => (
    <div className={classes.question}>
      <MailIcon className={classes.icon} color="primary" />
      <Typography variant="h5" gutterBottom>
        Recevez votre rapport personnalisé
      </Typography>
      <Typography gutterBottom>
        Entrez votre adresse e-mail pour recevoir une analyse détaillée de vos
        réponses et des recommandations personnalisées.
      </Typography>
      <TextField
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
      >
        Recevoir mon rapport
      </Button>
    </div>
  );

  const renderThankYou = () => (
    <>
      <div style={{ textAlign: "center" }}>
        <CheckCircleIcon className={classes.icon} />
      </div>
      <Typography variant="h5" gutterBottom align="center">
        Merci pour votre participation !
      </Typography>
      <div className={classes.content}>
        <Typography variant="body1" paragraph>
          Votre rapport personnalisé a été envoyé à <strong>{email}</strong>.
        </Typography>
        <Typography variant="body1">
          Un de nos experts vous contactera bientôt pour discuter des
          possibilités d'amélioration pour votre équipe.
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className={classes.button}
        onClick={() => {
          /* Action à définir, par exemple fermer ou retourner à l'accueil */
        }}
      >
        Fermer le questionnaire
      </Button>
    </>
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" className={classes.title} align="center">
          Questionnaire de positionnement pour Directeurs Commerciaux
        </Typography>
        {currentStep < questions.length && (
          <Typography variant="body1" gutterBottom align="center">
            Évaluez les performances de votre équipe de vente et identifiez les
            opportunités d'amélioration.
          </Typography>
        )}
        {currentStep < questions.length ? (
          <>
            <Typography variant="h6" gutterBottom>
              Question {currentStep + 1} sur {questions.length}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {questions[currentStep].text}
            </Typography>
            {renderQuestion(questions[currentStep])}
            <Button
              onClick={handleNext}
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
            >
              {currentStep === questions.length - 1 ? "Terminer" : "Suivant"}
            </Button>
          </>
        ) : currentStep === questions.length ? (
          renderEmailCollection()
        ) : (
          renderThankYou()
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionnaireDirecteurCommercial;

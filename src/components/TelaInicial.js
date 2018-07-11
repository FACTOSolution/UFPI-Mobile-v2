import React, { Component } from 'react';
import {
    View, 
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const acessoInformacao = require('../imgs/acesso_a_informacao.jpg');
const calendarioAcademico = require('../imgs/calendario_academico.jpg');
const contatos = require('../imgs/contatos.jpg');
const ensino = require('../imgs/ensino.jpg');
const eventos = require('../imgs/eventos.jpg');
const guia_do_estudante = require('../imgs/guia_do_estudante.jpg');
const mapa = require('../imgs/mapa.jpg');
const noticias = require('../imgs/noticias.jpg');
const onibus = require('../imgs/onibus.jpg');
const radio = require('../imgs/radio.jpg');
const restaurante = require('../imgs/restaurante.jpg');
const sigaa = require('../imgs/sigaa.jpg');

export default class TelaInicial extends Component {
  render() {
    return (
    <View style={styles.container}>
        <StatusBar
         backgroundColor = '#ccc'
        />
        <View style={styles.linha}>
            <Image style={styles.imagens} source={acessoInformacao}/>
            <Image style={styles.imagens} source={calendarioAcademico}/>
            <Image style={styles.imagens} source={contatos}/>
        </View>
        <View style={styles.linha}>
            <Image style={styles.imagens} source={ensino}/>
            <Image style={styles.imagens} source={eventos}/>
            <Image style={styles.imagens} source={guia_do_estudante}/>
        </View>
        <View style={styles.linha}>
            <Image style={styles.imagens} source={mapa}/>
            <Image style={styles.imagens} source={noticias}/>
            <Image style={styles.imagens} source={onibus}/>
        </View>
        <View style={styles.linha}>
            <Image style={styles.imagens} source={radio}/>
            <Image style={styles.imagens} source={restaurante}/>
            <Image style={styles.imagens} source={sigaa}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'column',
        margin: 5,
        flex: 1
    },
    linha: {
        flexDirection: 'row',
        padding: 5
    },
    imagens: {
        width: 100,
        height:100,
        padding: 20,
        margin: 5,
        borderColor: '#0431B4',
        borderWidth: 1,
        borderRadius: 9
    }
});
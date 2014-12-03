(function () {

    var arrayMethods = {
        /**
         * Returns a shallow copy of this array
         */
        copy: function () {
            return this.slice(0);
        },

        /**
         * Returns true if this array contains 'element', returns false otherwise
         */
        contains: function (element) {
            return this.indexOf(element) >= 0;
        },


        /**
         * Returns a copy of this array, removing the elements
         *         'from' index 'to' index within it
         */
        remove: function (from, to) {
            var res = [];
            var i = 0, j = 0;
            for (i = 0; i < from; i++) {
                res[i] = this[i];
            }
            j = i;
            for (i = to; i < this.length; i++) {
                res[j++] = this[i];
            }
            return res;
        },

        /**
         * Returns a copy of this array, rotated 'n' places,
         *     counterclockwise if 'n' is positive, clockwise otherwise
         */
        rotate: function (n) {
            if (!n) return this.slice(0);
            var length = this.length;
            var res = new Array(length);
            var thisIndex = (n > 0) ? n : length + n, i = 0, j = 0;
            for (i = thisIndex; i < length; i++) {
                res[j++] = this[i];
            }
            for (i = 0; i < thisIndex; i++) {
                res[j++] = this[i];
            }
            return res;
        },

        /**
         * Returns a copy of this array, removing but
         *         the first 'n' elements from it
         *         assumes n=1 when called with no arguments.
         */
        skipFirst: function (n) {
            if (n === 'undefined') n = 1;
            return this.slice(n);
        },

        /**
         * Returns a copy of this array, removing
         *         but the last 'n' elements from it
         *         assumes n=1 when called with no arguments.
         */
        skipLast: function (n) {
            if (n === 'undefined') n = 1;
            if (n > this.length) return [];
            return this.slice(0, this.length - n);
        },

        /**
         * Returns a copy of this array,
         *         sorting its elements randomly
         */

        shuffle: function () {
            array = this.splice(0);
            var m = array.length, t, i;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        },

        /**
         * Returns an unique array
         */
        makeUnique: function(){
        var u = {}, a = [];
        for(var i = 0, l = this.length; i < l; ++i){
            if(u.hasOwnProperty(this[i])) {
                continue;
            }
            a.push(this[i]);
            u[this[i]] = 1;
        }
        return a;
        },

        /**
         * Returns this associative array length
         */
        getAssociativeArrayLength: function () {
            return this.length;
        },

        /**
         * Returns a copy of this array that contains the difference
         *         between source array and 'array'
         */
        difference: function (array) {
            var filterFunc = filterOnOtherArray_diff.bind(array);
            return this.filter(filterFunc);
        },

        /**
         * Returns a copy of this array that contains the
         *         intersection between source array and 'array'
         */
        intersection: function (array) {
            var filterFunc = filterOnOtherArray_inter.bind(array);
            return this.filter(filterFunc);
        },

        /**
         * Returns a copy of this array that contains the union
         *   between source array with 'array', removing duplicates
         *    ! fails with a sparse array !
         */
        union: function (array) {
            var obj = {}, res = [], i = 0, k = 0;
            for (i = 0; i < this.length; i++) {
                obj[this[i]] = this[i];
            }
            for (i = 0; i < array.length; i++) {
                obj[array[i]] = array[i];
            }
            for (k in obj) {
                res.push(obj[k]);
            }
            return res;
        }
    };

    // let's install those methods on the prototype
    for (var newMethodName in arrayMethods) {
        installFunction(newMethodName, arrayMethods[newMethodName]);
    }

    function installFunction(name, fn) {
        if (Array.prototype[name]) throw ('Array method ' + name + '() already defined.');
        Object.defineProperty(Array.prototype, name, {
            value: fn
        });
    }

    function filterOnOtherArray_diff(arr, i) {
        return (arr.indexOf(i) < 0);
    }

    function filterOnOtherArray_inter(arr, i) {
        return (arr.indexOf(i) >= 0);
    }
})();

function simpleRant() {

    var amount = ["a few", "a bunch of", "some", "many more"];

    // <name-male> likes to <verb-transitive> <noun.plural> with <pron.poss-male> pet <noun-animal> on <time_noun.plural-dayofweek>.
    <!-- inject:js -->
    <!-- endinject -->

    this.sentence = function () {
        return 'instance method';
    };
    this.capitalize = function (s) {
        return s[0].toUpperCase() + s.slice(1);
    };
    this.getTitle = function () {
        return dic_title.shuffle()[0];
    };
    this.getPossMale = function () {
        return dic_pron_male[0].split("/")[3];
    };
    this.getNounAnimal = function () {
        return dic_noun_animal[0].split("/")[3];
    };
    this.getCountry = function() {
        return dic_country;
    };

    this.getAdjective = function (plural) {
        var num = Math.floor(Math.random() * dic_adj.length);
        return dic_adj[num].split("/")[plural];
    };
    this.getVerb = function (plural) {
        var num = Math.floor(Math.random() * dic_verb.length);
        return dic_verb[num].split("/")[plural];
    };
    this.getColor = function (plural) {
        return dic_color.shuffle()[0].split("/")[plural];
    };
    this.getNoun = function (plural) {
        var num = Math.floor(Math.random() * dic_noun.length);
        return dic_noun[num].split("/")[plural];
    };
    this.getNounByType = function (nountype,plural) {
        if(nountype == "animal"){
            var num = Math.floor(Math.random() * dic_noun_animal.length);
            return dic_noun_animal[num].split("/")[plural];
        }

        return "";
    };
    this.getAmount = function () {
        return amount.shuffle()[0];
    };
    this.getRelationship = function (plural) {
        return dic_rel.shuffle()[0].split("/")[plural];
    };
    this.getTitleMale = function () {
        return dic_title.shuffle()[0];
    };
    this.getTitleFemale = function () {
        return dic_title.shuffle()[0];
    };

    this.getNameMale = function () {
        return dic_name_male.shuffle()[0];
    };
    this.getNameFemale = function () {
        return dic_name_female.shuffle()[0];
    };


    this.getYes = function () {
        return dic_yn_yes.shuffle()[0];
    };
    this.getNo = function () {
        return dic_yn_no.shuffle()[0];
    };
    this.getExclamation = function () {
        return dic_emo.shuffle()[0];
    };
    this.getFirstName = function () {
        return dic_name.shuffle()[0].split("/")[plural];
    };
    this.getLastName = function () {
        return dic_name.shuffle()[0];
    };
    this.getFacialExpression = function () {
        return dic_face.shuffle()[0];
    };
    this.getFacialExpressionVerbed = function () {
        return dic_face.shuffle()[0];
    };
    this.getCoordinatingConjunction = function () {
        return dic_conj.shuffle()[0];
    };


    this.rantConstructor = function (input) {
        var result = input;
        var regex = /\<(.*?)\>/g;
        var matches;
        var replacement = [], i=0;

        var adj_matched=adj1m=noun0m = noun1m = firstnm = lastnm =
            title_matched = titlem_matched = titlef_matched = exclamation_matched = yes_matched = no_matched =
                amount_matched = colorplural_matched = color_matched = relationship_matched=noun3m=adj2m=
                    relationshipplural_matched=facialexpression_matched=facialexpressioned_matched=
                        conjunction_matched=verb1m=verb2m=namemm=namefm=verb3m=possm=false;

        while (matches = regex.exec(input)) {
            //console.log(matches.length);
            //console.log(matches);



            if (matches[1] == "pron.poss-male") {
                if(!possm) {
                    replacement = [];
                    i = result.match(/\<pron.poss-male\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getPossMale());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<pron.poss-male>/g, function () {
                        return replacement[i++];
                    });
                }
                possm = true;
            }
            if (matches[1] == "verb") {
                if(!verb1m) {
                    replacement = [];
                    i = result.match(/\<verb\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getVerb(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<verb>/g, function () {
                        return replacement[i++];
                    });
                }
                verb1m = true;
            }
            if (matches[1] == "verb-transitive") {
                if(!verb3m) {
                    replacement = [];
                    i = result.match(/\<verb-transitive\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getVerb(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<verb-transitive>/g, function () {
                        return replacement[i++];
                    });
                }
                verb3m = true;
            }
            if (matches[1] == "verb.ed") {
                if(!verb2m) {
                    replacement = [];
                    i = result.match(/\<verb.ed\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getVerb(2));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<verb.ed>/g, function () {
                        return replacement[i++];
                    });
                }
                verb2m = true;
            }
            if (matches[1] == "title") {
                if(!title_matched) {
                    replacement = [];
                    i = result.match(/\<title\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getTitle());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<title>/g, function () {
                        return replacement[i++];
                    });
                }
                title_matched = true;
            }
            if (matches[1] == "name-female") {
                if(!namefm) {
                    replacement = [];
                    i = result.match(/\<name-female\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getNameFemale());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<name-female>/g, function () {
                        return replacement[i++];
                    });
                }
                namefm = true;
            }
            if (matches[1] == "name-male") {
                if(!namemm) {
                    replacement = [];
                    i = result.match(/\<name-male\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getNameMale());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<name-male>/g, function () {
                        return replacement[i++];
                    });
                }
                namemm = true;
            }
            if (matches[1] == "title:male") {
                if(!titlem_matched) {
                    replacement = [];
                    i = result.match(/\<title.male\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getTitleMale());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<title.male>/g, function () {
                        return replacement[i++];
                    });
                }
                titlem_matched = true;
            }
            if (matches[1] == "yes") {
                if(!yes_matched) {
                    replacement = [];
                    i = result.match(/\<yes\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getYes());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<yes>/g, function () {
                        return replacement[i++];
                    });
                }
                yes_matched = true;
            }
            if (matches[1] == "no") {
                if(!no_matched) {
                    replacement = [];
                    i = result.match(/\<no\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getNo());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<no>/g, function () {
                        return replacement[i++];
                    });
                }
                no_matched = true;
            }
            if (matches[1] == "amount") {
                if(!amount_matched) {
                    replacement = [];
                    i = result.match(/\<amount\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getAmount());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<amount>/g, function () {
                        return replacement[i++];
                    });
                }
                no_matched = true;

            }
            if ((matches[1] == "adj")) {
                if(!adj_matched) {
                    replacement = [];
                    i = result.match(/\<adj\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getAdjective(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<adj>/g, function () {
                        return replacement[i++];
                    });
                }
                adj_matched = true;
            }
            if ((matches[1] == "adj.plural") || (matches[1] == "adj.plural")) {
                if(!adj1m) {
                    replacement = [];
                    i = result.match(/\<adj.plural\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getAdjective(1));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<adj.plural>/g, function () {
                        return replacement[i++];
                    });
                }
                adj1m = true;
            }


            if (matches[1] == "noun") {
                if(!noun0m) {
                    replacement = [];
                    i = result.match(/\<noun\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getNoun(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<noun>/g, function () {
                        return replacement[i++];
                    });
                }
                noun0m = true;
            }

            if(matches[1].match('noun-animal')) {
                if(!noun3m) {
                    replacement = [];
                    var re = new RegExp( matches[1], 'g');
                    i = result.match(re).length;
                    var plural=0;
                    if(matches[1].match('plural','g')){
                        plural=1;
                    }

                    while (i > 0) {
                        replacement.push(this.getNounByType('animal',plural));
                        i--;
                    }

                    var re = new RegExp('<'+matches[1]+'>', 'g');
                    result = result.replace(re, function () {
                        return replacement[i++];
                    });
                }
                noun3m = true;
            }

            if(matches[1].match('adj(|.plural)$')) {
                if(!adj2m) {
                    replacement = [];
                    var re = new RegExp( matches[1], 'g');
                    i = result.match(re).length;
                    var plural=0;
                    if(matches[1].match('plural','g')){
                        plural=1;
                    }

                    while (i > 0) {
                        replacement.push(this.getAdjective(plural));
                        i--;
                    }

                    var re = new RegExp('<'+matches[1]+'>', 'g');
                    result = result.replace(re, function () {
                        return replacement[i++];
                    });
                }
                adj2m = true;
            }

            //
            //if(matches[1] == matches[1].match('noun-.*')) {
            //
            //        var nountype = matches[1].replace('noun-', '');
            //        replacement = [];
            //        var re = new RegExp( matches[1], 'g');
            //        i = result.match(re).length;
            //        while (i > 0) {
            //            replacement.push(this.getNounByType(nountype,1));
            //            i--;
            //        }
            //
            //        i = 0;
            //        var re = new RegExp(matches[1], 'g');
            //        result = result.replace(re, function () {
            //            return replacement[i++];
            //        });
            //};



            if (matches[1] == "noun.plural") {
                if(!noun1m) {
                    replacement = [];
                    i = result.match(/\<noun.plural\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getNoun(1));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<noun.plural>/g, function () {
                        return replacement[i++];
                    });
                }
                noun1m = true;
            }
            if (matches[1] == "exclamation") {
                if(!exclamation_matched) {
                    replacement = [];
                    i = result.match(/\<exclamation\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getExclamation());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<exclamation>/g, function () {
                        return replacement[i++];
                    });
                }
                exclamation_matched = true;
            }
            if (matches[1] == "firstname") {
                if(!firstnm) {
                    replacement = [];
                    i = result.match(/\<firstname\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getFirstName());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<firstname>/g, function () {
                        return replacement[i++];
                    });
                }
                firstnm = true;
            }
            if (matches[1] == "lastname") {
                if(!lastnm) {
                    replacement = [];
                    i = result.match(/\<lastname\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getLastName());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<lastname>/g, function () {
                        return replacement[i++];
                    });
                }
                lastnm = true;
            }
            if (matches[1] == "color") {
                if(!color_matched) {
                    replacement = [];
                    i = result.match(/\<color\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getColor(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<color>/g, function () {
                        return replacement[i++];
                    });
                }
                color_matched = true;
            }
            if (matches[1] == "color.plural") {
                if(!colorplural_matched) {
                    replacement = [];
                    i = result.match(/\<color.plural\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getColor(1));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<color.plural>/g, function () {
                        return replacement[i++];
                    });
                }
                colorplural_matched = true;
            }
            if (matches[1] == "relationship") {
                if(!relationship_matched) {
                    replacement = [];
                    i = result.match(/\<relationship\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getRelationship(0));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<relationship>/g, function () {
                        return replacement[i++];
                    });
                }
                relationship_matched = true;
            }
            if (matches[1] == "relationship.plural") {
                if(!relationshipplural_matched) {
                    replacement = [];
                    i = result.match(/\<relationship.plural\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getRelationship(1));
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<relationship.plural>/g, function () {
                        return replacement[i++];
                    });
                }
                relationshipplural_matched = true;
            }
            if (matches[1] == "facialexpression") {
                if(!facialexpression_matched) {
                    replacement = [];
                    i = result.match(/\<facialexpression\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getFacialExpression());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<facialexpression>/g, function () {
                        return replacement[i++];
                    });
                }
                facialexpression_matched = true;
            }
            if (matches[1] == "conjunction") {
                if(!conjunction_matched) {
                    replacement = [];
                    i = result.match(/\<conjunction\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getCoordinatingConjunction());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<conjunction>/g, function () {
                        return replacement[i++];
                    });
                }
                conjunction_matched = true;
            }


            if (matches[1] == "facial_expression.ed") {
                if(!facialexpressioned_matched) {
                    replacement = [];
                    i = result.match(/\<facial_expression.ed\>/g).length;
                    while (i > 0) {
                        replacement.push(this.getFacialExpressionVerbed());
                        i--;
                    }

                    i = 0;
                    result = result.replace(/\<facial_expression.ed>/g, function () {
                        return replacement[i++];
                    });
                }
                facialexpressioned_matched = true;
            }
            //console.log(matches[1]);
        }
        return this.capitalize(result);
    };


    this.vowel = function () {
    }
}
// a first class functional object
//
//simpleRant.prototype.sentence = function () {
//    return 'prototype method';
//};
//
//// Test
//rant = new simpleRant;
//var result = rant.rantConstructor('<yes>, I need a bunch of <adjective> <noun.plural>');
//console.log(result);
//var result = rant.rantConstructor('<exclamation>, <adjective> <noun.plural>');
//console.log(result);
//var result = rant.rantConstructor('<title> <firstname> <lastname>, <relationship> of <firstname>');
//var result = rant.rantConstructor('<firstname> said with a wry <facialexpression> and <bent_facial_expression>');
//console.log(result);
//var result = rant.rantConstructor('<color> <color.plural>');
//console.log(result);

/*

 API:
 <yes> <no>


 */



